import fs from "node:fs";
import path from "node:path";

const sampleRate = 24000;
const durationSeconds = 63;
const channels = 2;
const samples = sampleRate * durationSeconds;
const output = path.resolve("public/shyena-soundtrack.wav");

// Original procedural ambient soundtrack: restrained pad, soft pulse,
// piano-like plucks and a gentle harmonic lift. No external music asset.
const buffer = Buffer.alloc(samples * channels * 2);
const TAU = Math.PI * 2;
const clamp = (value) => Math.max(-1, Math.min(1, value));
const smoothstep = (x) => x * x * (3 - 2 * x);
const envelope = (t, attack = 2, release = 4) => {
  const a = Math.min(1, t / attack);
  const r = Math.min(1, (durationSeconds - t) / release);
  return smoothstep(Math.max(0, Math.min(a, r)));
};
const noteHz = (midi) => 440 * Math.pow(2, (midi - 69) / 12);

function pad(t) {
  const progression = [48, 51, 55, 50, 53, 57, 48, 52];
  const section = Math.floor(t / 7.875) % progression.length;
  const root = noteHz(progression[section]);
  const chord = [root, root * Math.pow(2, 4 / 12), root * Math.pow(2, 7 / 12)];
  let value = 0;
  for (const [index, frequency] of chord.entries()) {
    const drift = 1 + 0.002 * Math.sin(TAU * (0.07 + index * 0.031) * t);
    value += Math.sin(TAU * frequency * drift * t + index * 0.8) * (0.22 / (index + 1));
  }
  return value * envelope(t, 5, 7);
}

function pulse(t) {
  const beat = 60 / 88;
  const phase = t % beat;
  const click = Math.exp(-phase * 20) * Math.exp(-t / 90);
  return Math.sin(TAU * 110 * t) * click * 0.075 * (0.25 + 0.75 * Math.min(1, t / 12));
}

function pluck(t) {
  const beat = 60 / 88;
  const step = Math.floor(t / (beat * 2));
  const local = t - step * beat * 2;
  if (local > 0.9) return 0;
  const notes = [60, 64, 67, 72, 62, 65, 69, 74];
  const frequency = noteHz(notes[step % notes.length]);
  return Math.sin(TAU * frequency * local) * Math.exp(-local * 4.8) * 0.075;
}

function lift(t) {
  if (t < 47) return 0;
  const x = Math.min(1, (t - 47) / 13);
  const freq = noteHz(60 + Math.round(x * 12));
  return Math.sin(TAU * freq * t) * smoothstep(x) * 0.045;
}

function sample(t, channel) {
  const stereo = channel === 0 ? -1 : 1;
  const motion = Math.sin(TAU * 0.035 * t + stereo * 0.4) * 0.015;
  return clamp((pad(t) + pulse(t) + pluck(t) + lift(t) + motion) * 0.72 * envelope(t, 1.5, 3.5));
}

const dataSize = samples * channels * 2;
buffer.write("RIFF", 0);
buffer.writeUInt32LE(36 + dataSize, 4);
buffer.write("WAVE", 8);
buffer.write("fmt ", 12);
buffer.writeUInt32LE(16, 16);
buffer.writeUInt16LE(1, 20);
buffer.writeUInt16LE(channels, 22);
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(sampleRate * channels * 2, 28);
buffer.writeUInt16LE(channels * 2, 32);
buffer.writeUInt16LE(16, 34);
buffer.write("data", 36);
buffer.writeUInt32LE(dataSize, 40);

let offset = 44;
for (let i = 0; i < samples; i += 1) {
  const t = i / sampleRate;
  for (let channel = 0; channel < channels; channel += 1) {
    buffer.writeInt16LE(Math.round(sample(t, channel) * 32767), offset);
    offset += 2;
  }
}

fs.writeFileSync(output, buffer);
console.log(`Generated original Shyena soundtrack: ${output}`);
