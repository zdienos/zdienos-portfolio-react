import { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme";

// Two inks, slightly out of register, like a cheap offset print
const INKS = [
  { color: "--cyan", dx: -1.4, dy: -0.9 },
  { color: "--magenta", dx: 1.4, dy: 0.9 },
];

function draw(canvas, img, cell, dark) {
  const width = canvas.clientWidth;
  if (!width) return;
  const height = Math.round((width * img.naturalHeight) / img.naturalWidth);
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.height = `${height}px`;

  // Sample the photo at one pixel per halftone cell
  const cols = Math.ceil(width / cell);
  const rows = Math.ceil(height / cell);
  const sample = document.createElement("canvas");
  sample.width = cols;
  sample.height = rows;
  const sctx = sample.getContext("2d", { willReadFrequently: true });
  sctx.drawImage(img, 0, 0, cols, rows);
  const px = sctx.getImageData(0, 0, cols, rows).data;

  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.globalCompositeOperation = dark ? "screen" : "multiply";

  const css = getComputedStyle(document.documentElement);
  for (const ink of INKS) {
    ctx.fillStyle = css.getPropertyValue(ink.color).trim();
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = (y * cols + x) * 4;
        const lum = (0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2]) / 255;
        // On paper, dark areas get big dots; on black, light areas do
        const r = (dark ? lum : 1 - lum) * cell * 0.62;
        if (r < 0.35) continue;
        ctx.beginPath();
        ctx.arc(x * cell + cell / 2 + ink.dx, y * cell + cell / 2 + ink.dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}

function Halftone({ src, alt, ratio, cell = 7, className = "" }) {
  const canvasRef = useRef(null);
  const [img, setImg] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const image = new Image();
    image.onload = () => setImg(image);
    image.src = src;
  }, [src]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!img || !canvas) return;
    let lastWidth = 0;
    const redraw = () => {
      if (canvas.clientWidth === lastWidth) return;
      lastWidth = canvas.clientWidth;
      draw(canvas, img, cell, theme === "dark");
    };
    redraw();
    const observer = new ResizeObserver(redraw);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [img, cell, theme]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={alt}
      className={`block w-full ${className}`}
      // Reserve the height before the photo loads so the page doesn't jump
      style={ratio ? { aspectRatio: ratio } : undefined}
    />
  );
}

export default Halftone;
