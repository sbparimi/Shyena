import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Maximize2, Minimize2, Music2, Pause, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";

const VIDEO_SELECTOR = 'video[aria-label="Shyena Cognigy assurance workflow"]';

const STORY = [
  { title: "Map the system", label: "NEXUS · UNDERSTAND", text: "Read the Cognigy flow, branches, intents, tools and orchestration paths before testing." },
  { title: "Test real behavior", label: "VERA · TEST + EVALUATE", text: "Execute realistic customer journeys and evaluate deterministic, semantic and orchestration signals." },
  { title: "Defend the release", label: "CHAKRA · DEFEND", text: "Probe security boundaries and carry findings into the same evidence-backed release decision." },
  { title: "Prove the release", label: "SHYENA · ASSURANCE", text: "Connect runtime evidence to a clear release verdict that teams can act on." },
];

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
      parent.parentElement?.classList.add("shyena-video-shell");

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
    if (video.paused) await video.play();
    else video.pause();
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
      if (document.fullscreenElement) await document.exitFullscreen();
      else await target.requestFullscreen();
    } catch {
      setFullscreen(Boolean(document.fullscreenElement));
    }
  };

  const progress = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;
  const storyIndex = duration > 0 ? Math.min(STORY.length - 1, Math.floor((currentTime / duration) * STORY.length)) : 0;
  const story = STORY[storyIndex];

  return createPortal(
    <div
      className="pointer-events-none absolute inset-0 z-20"
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="absolute right-4 top-4 max-w-[min(330px,calc(100%-2rem))] sm:right-5 sm:top-5">
        <div className="pointer-events-auto rounded-xl border border-slate-200/90 bg-white/92 px-3.5 py-3 text-slate-950 shadow-[0_12px_30px_-20px_rgba(15,23,42,.5)] backdrop-blur-xl">
          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#14b8a6]" />
            <span>{story.label}</span>
          </div>
          <div className="mt-1 text-sm font-semibold tracking-tight text-slate-950">{story.title}</div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4 sm:pb-4">
        <div className="pointer-events-auto rounded-2xl border border-slate-200/90 bg-white/95 p-2.5 text-slate-900 shadow-[0_18px_45px_-25px_rgba(15,23,42,.45)] backdrop-blur-xl sm:p-3">
          <div className="relative mb-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="absolute inset-y-0 left-0 rounded-full bg-[#14b8a6]" style={{ width: `${progress}%` }} />
            <input aria-label="Video progress" type="range" min={0} max={duration || 0} step={0.1} value={Math.min(currentTime, duration || 0)} onChange={(event) => seek(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button type="button" aria-label={playing ? "Pause video" : "Play video"} onClick={togglePlayback} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#ffb804]">
              {playing ? <Pause className="h-4 w-4" fill="currentColor" /> : <Play className="h-4 w-4" fill="currentColor" />}
            </button>
            <span className="hidden min-w-[74px] font-mono text-[10px] tabular-nums text-slate-500 sm:inline">{formatTime(currentTime)} / {formatTime(duration)}</span>
            <button type="button" aria-pressed={musicEnabled} aria-label={musicEnabled ? "Turn background music off" : "Turn background music on"} title={musicEnabled ? "Turn background music off" : "Turn background music on"} data-music-control="true" data-music-active={musicEnabled ? "true" : "false"} onClick={toggleMusic} className="flex h-9 items-center gap-2 rounded-full border border-slate-300 bg-white px-3 text-xs font-medium text-slate-600 transition hover:border-slate-950 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-[#ffb804]">
              <Music2 className="h-4 w-4" /> <span className="hidden sm:inline">Music</span>
            </button>
            <div className="ml-auto" />
            <Link to="/contact" className="hidden h-9 items-center gap-1.5 rounded-full bg-[#ffb804] px-3.5 text-[10px] font-extrabold uppercase tracking-[0.04em] text-slate-950 transition hover:bg-[#f2aa00] sm:inline-flex">
              Talk to an expert
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button type="button" aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"} title={fullscreen ? "Exit fullscreen" : "Enter fullscreen"} onClick={toggleFullscreen} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-slate-950 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-[#ffb804]">
              {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>,
    controlsHost,
  );
}
