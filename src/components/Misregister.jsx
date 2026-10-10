import { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme";

// Each plate is the drawing's lines in one ink, printed slightly off register
const PLATES = [
  { color: "--cyan", dx: -2.5, dy: -1.5 },
  { color: "--magenta", dx: 2.5, dy: 1.5 },
  { color: "--ink", dx: 0, dy: 0 },
];

// Turns dark lines on white paper into an alpha mask: line = opaque, paper = clear
function lineMask(img, width, height) {
  const mask = document.createElement("canvas");
  mask.width = width;
  mask.height = height;
  const ctx = mask.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, width, height);
  const data = ctx.getImageData(0, 0, width, height);
  const px = data.data;
  for (let i = 0; i < px.length; i += 4) {
    const lum = (0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2]) / 255;
    // Boost contrast so faint paper texture drops out and lines stay solid
    const a = Math.min(1, Math.max(0, (0.8 - lum) * 2.4));
    px[i] = px[i + 1] = px[i + 2] = 0;
    px[i + 3] = Math.round(a * 255);
  }
  ctx.putImageData(data, 0, 0);
  return mask;
}

function draw(canvas, img, dark) {
  const width = canvas.clientWidth;
  if (!width) return;
  const height = Math.round((width * img.naturalHeight) / img.naturalWidth);
  const dpr = window.devicePixelRatio || 1;
  const w = Math.round(width * dpr);
  const h = Math.round(height * dpr);
  canvas.width = w;
  canvas.height = h;

  const mask = lineMask(img, w, h);
  const plate = document.createElement("canvas");
  plate.width = w;
  plate.height = h;
  const pctx = plate.getContext("2d");

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = dark ? "screen" : "multiply";

  const css = getComputedStyle(document.documentElement);
  for (const { color, dx, dy } of PLATES) {
    pctx.globalCompositeOperation = "source-over";
    pctx.clearRect(0, 0, w, h);
    pctx.drawImage(mask, 0, 0);
    pctx.globalCompositeOperation = "source-in";
    pctx.fillStyle = css.getPropertyValue(color).trim();
    pctx.fillRect(0, 0, w, h);
    ctx.drawImage(plate, dx * dpr, dy * dpr);
  }
}

function Misregister({ src, alt, ratio, className = "" }) {
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
      draw(canvas, img, theme === "dark");
    };
    redraw();
    const observer = new ResizeObserver(redraw);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [img, theme]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={alt}
      className={`block w-full ${className}`}
      // Reserve the height before the drawing loads so the page doesn't jump
      style={{ aspectRatio: ratio }}
    />
  );
}

export default Misregister;
