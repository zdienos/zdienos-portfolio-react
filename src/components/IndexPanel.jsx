import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { BLOG_URL, pages } from "../data/content";
import { usePreview, useTheme } from "../contexts";

const clockFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Makassar",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="meta">
      Makassar
      <br />
      <time className="text-ink">{clockFormat.format(now)}</time> WITA
    </p>
  );
}

const pad = (n) => String(n).padStart(2, "0");
const YEAR = new Date().getFullYear();

function IndexPanel({ showGrid, onToggleGrid }) {
  const { pathname } = useLocation();
  const { preview } = usePreview();
  const { theme, toggleTheme } = useTheme();
  const index = pages.findIndex((p) => p.to === pathname);
  const pageNumber = index === -1 ? "404" : pad(index + 1);

  return (
    <aside className="border-b border-line px-5 pb-5 pt-4 lg:sticky lg:top-0 lg:col-span-5 lg:flex lg:h-svh lg:flex-col lg:border-b-0 lg:border-r lg:px-8 lg:pb-6 lg:pt-6">
      <div className="meta flex items-baseline justify-between gap-4">
        <span>zdienos.com</span>
        <span>Portfolio, ed. {YEAR}</span>
      </div>

      <Link
        to="/"
        className="mt-10 block text-[clamp(2.75rem,5.4vw,6rem)] font-light leading-[0.88] tracking-[-0.045em] lg:mt-12"
      >
        Mardino
        <br />
        Santosa
      </Link>
      <p className="meta mt-3">IT Administrator &amp; Full Stack Developer</p>

      {/* Figure field: the current page number, or a hovered project */}
      <div className="relative mt-6 hidden min-h-0 flex-1 lg:block" aria-hidden={!preview}>
        {preview ? (
          <figure className="absolute inset-0 flex flex-col">
            <img
              src={preview.img}
              alt=""
              className="min-h-0 w-full flex-1 object-cover object-top"
            />
            <figcaption className="meta mt-2 flex justify-between">
              <span>Fig. {pad(preview.index)}</span>
              <span className="text-ink">{preview.title}</span>
            </figcaption>
          </figure>
        ) : (
          <span className="absolute bottom-0 left-0 -mb-[0.06em] -ml-[0.06em] text-[clamp(8rem,20vw,21rem)] font-extralight leading-[0.74] tracking-[-0.07em] text-blue">
            {pageNumber}
          </span>
        )}
      </div>

      <nav aria-label="Contents" className="mt-8">
        <p className="meta mb-1">Contents</p>
        <ol className="border-t border-ink">
          {pages.map(({ to, label }, i) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  `group grid grid-cols-[2.25rem_1fr_auto] items-baseline border-b border-line py-1.5 transition-colors hover:text-blue ${
                    isActive ? "text-blue" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="font-mono text-xs">{pad(i + 1)}</span>
                    <span>{label}</span>
                    <span className="font-mono text-xs">
                      {isActive ? "● current" : `p. ${pad(i + 1)}`}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noreferrer"
              className="grid grid-cols-[2.25rem_1fr_auto] items-baseline border-b border-line py-1.5 transition-colors hover:text-blue"
            >
              <span className="font-mono text-xs">05</span>
              <span>Blog</span>
              <span className="font-mono text-xs">ext. ↗</span>
            </a>
          </li>
        </ol>
      </nav>

      <div className="mt-5 grid grid-cols-3 gap-4">
        <Clock />
        <p className="meta">
          5°08′S
          <br />
          119°25′E
        </p>
        <div className="meta flex flex-col items-start">
          <button
            type="button"
            onClick={toggleTheme}
            className="hover:text-blue"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            [{theme === "dark" ? "●" : "○"}] {theme === "dark" ? "Dark" : "Light"}
          </button>
          <button
            type="button"
            onClick={onToggleGrid}
            aria-pressed={showGrid}
            className="hover:text-blue"
            title="Toggle layout grid (G)"
          >
            [{showGrid ? "#" : " "}] Grid
          </button>
        </div>
      </div>
    </aside>
  );
}

export default IndexPanel;
