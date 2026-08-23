/**
 * Spins the trident favicon by redrawing it to a canvas each frame and
 * swapping the <link rel="icon"> href to the resulting data URL — static
 * favicon formats (PNG/ICO/GIF) don't animate reliably across browsers,
 * but a JS-driven canvas swap does.
 */
export function startAnimatedFavicon(): () => void {
  if (typeof document === "undefined") return () => {};

  const size = 96;
  const degreesPerSecond = 180;
  const frameInterval = 1000 / 24;

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.type = "image/png";

  const img = new Image();
  img.src = "/favicon-base.png";

  let angle = 0;
  let lastDraw = 0;
  let rafId = 0;
  let running = true;

  function draw(timestamp: number) {
    if (!running) return;
    rafId = requestAnimationFrame(draw);
    if (timestamp - lastDraw < frameInterval) return;
    const delta = lastDraw ? timestamp - lastDraw : frameInterval;
    lastDraw = timestamp;

    angle = (angle + degreesPerSecond * (delta / 1000)) % 360;

    ctx!.clearRect(0, 0, size, size);
    ctx!.save();
    ctx!.translate(size / 2, size / 2);
    ctx!.rotate((angle * Math.PI) / 180);
    ctx!.drawImage(img, -size / 2, -size / 2, size, size);
    ctx!.restore();

    link!.href = canvas.toDataURL("image/png");
  }

  img.onload = () => {
    rafId = requestAnimationFrame(draw);
  };

  return () => {
    running = false;
    cancelAnimationFrame(rafId);
  };
}
