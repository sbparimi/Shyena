import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Maximize2,
  Minimize2,
  Music2,
  Pause,
  Play,
} from "lucide-react";

const VIDEO_SELECTOR = 'video[aria-label="Shyena Cognigy assurance workflow"]';

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";
  const seconds = Math.max(0, Math.floor(value));
  const minutes = Math.floor(seconds / 60);
  const remainder = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

export function VideoExperience() {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [controlsHost, setControlsHost] = useState<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let observer: MutationObserver | undefined;
    let mounted = true;

    const attach = () => {
      const found = document.querySelector(VIDEO_SELECTOR);
      if (!(found instanceof HTMLVideoElement) || !mounted) return;

      setVideo((current) => (current === found ? current : found));
      setPlaying(!found.paused);
      setCurrentTime(found.currentTime || 0);
      setDuration(Number.isFinite(found.duration) ? found.duration : 0);

      const parent = found.parentElement;
      if (!parent) return;
      parent.classList.add("shyena-video-player");

      let host = parent.querySelector<HTMLDivElement>(":scope > .shyena-video-controls-host");
      if (!host) {
        host = document.createElement("div");
        host.className = "shyena-video-controls-host";
        parent.appendChild(host);
      }
      setControlsHost(host);
    };

    attach();
    observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      mounted = false;
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!video) return;

    const sync = () => {
      setPlaying(!video.paused);
      setCurrentTime(video.currentTime || 0);
      setDuration(Number.isFinite(video.duration) ? video.duration : 0);
    };

    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);
    video.addEventListener("timeupdate", sync);
    video.addEventListener("loadedmetadata", sync);

    return () => {
      video.removeEventListener("play", sync);
      video.removeEventListener("pause", sync);
      video.removeEventListener("timeupdate", sync);
      video.removeEventListener("loadedmetadata", sync);
    };
  }, [video]);

  useEffect(() => {
    const music = new Audio("/audio/inspired-loop.mp3");
    music.loop = true;
    music.preload = "metadata";
    music.volume = 0.16;
    musicRef.current = music;

    return () => {
      music.pause();
      music.src = "";
      musicRef.current = null;
    };
  }, []);

  useEffect(() => {
    const handleFullscreen = () => {
      const active = document.fullscreenElement;
      setFullscreen(active instanceof HTMLElement && active.classList.contains("shyena-video-player"));
    };

    document.addEventListener("fullscreenchange", handleFullscreen);
    return () => document.removeEventListener("fullscreenchange", handleFullscreen);
  }, []);

  if (!video || !controlsHost) return null;

  const togglePlayback = async () => {
    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  const seek = (value: number) => {
    if (!Number.isFinite(duration) || duration <= 0) return;
    video.currentTime = Math.min(duration, Math.max(0, value));
    setCurrentTime(video.currentTime);
  };

  const toggleMusic = async () => {
    const music = musicRef.current;
    if (!music) return;

    if (!music.paused) {
      music.pause();
      setMusicEnabled(false);
      return;
    }

    try {
      await music.play();
      setMusicEnabled(true);
    } catch {
      setMusicEnabled(false);
    }
  };

  const toggleFullscreen = async () => {
    const target = video.parentElement;
    if (!target) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await target.requestFullscreen();
      }
    } catch {
      setFullscreen(Boolean(document.fullscreenElement));
    }
  };

  const progress = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;

  return createPortal(
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4 sm:pb-4"
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="pointer-events-auto rounded-2xl border border-white/10 bg-[#090713]/90 p-2.5 text-white shadow-2xl backdrop-blur-xl sm:p-3">
        <div className="relative mb-2 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
          <div className="absolute inset-y-0 left-0 rounded-full bg-violet-400" style={{ width: `${progress}%` }} />
          <input
            aria-label="Video progress"
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={Math.min(currentTime, duration || 0)}
            onChange={(event) => seek(Number(event.target.value))}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label={playing ? "Pause video" : "Play video"}
            onClick={togglePlayback}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#090713] transition hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            {playing ? <Pause className="h-4 w-4" fill="currentColor" /> : <Play className="h-4 w-4" fill="currentColor" />}
          </button>

          <span className="hidden min-w-[74px] font-mono text-[10px] tabular-nums text-white/60 sm:inline">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <button
            type="button"
            aria-pressed={musicEnabled}
            aria-label={musicEnabled ? "Turn background music off" : "Turn background music on"}
            title={musicEnabled ? "Turn background music off" : "Turn background music on"}
            onClick={toggleMusic}
            className={`flex h-9 items-center gap-2 rounded-xl px-3 text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-violet-300 ${musicEnabled ? "bg-violet-500/25 text-violet-200" : "text-white/65 hover:bg-white/10 hover:text-white"}`}
          >
            <Music2 className="h-4 w-4" />
            <span className="hidden sm:inline">Music</span>
          </button>

          <div className="ml-auto" />

          <button
            type="button"
            aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            title={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            onClick={toggleFullscreen}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white/75 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>,
    controlsHost,
  );
}
