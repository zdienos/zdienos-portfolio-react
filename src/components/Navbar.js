import React from "react";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { to: "/", label: "Index", end: true },
  { to: "/about", label: "About" },
  { to: "/project", label: "Works" },
  { to: "/resume", label: "CV" },
];

const cell =
  "flex h-14 flex-col justify-between bg-paper px-3 py-2 text-sm font-bold uppercase leading-none tracking-wide transition-colors";

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink">
      <nav
        aria-label="Primary"
        className="grid grid-cols-3 gap-[2px] bg-ink md:grid-cols-[1.6fr_repeat(5,minmax(0,1fr))_auto]"
      >
        <Link
          to="/"
          className="col-span-3 flex h-14 items-center gap-3 bg-paper px-4 text-2xl font-black uppercase tracking-tight font-condensed md:col-span-1"
        >
          <span className="h-5 w-5 rounded-full bg-signal" aria-hidden="true" />
          Mardino Santosa
        </Link>

        {links.map(({ to, label, end }, i) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `${cell} ${
                isActive
                  ? "!bg-signal text-black"
                  : "hover:bg-ink hover:text-paper"
              }`
            }
          >
            <span className="text-[10px] font-semibold">0{i + 1}</span>
            <span>{label}</span>
          </NavLink>
        ))}

        <a
          href="https://blog.zdienos.com/"
          target="_blank"
          rel="noreferrer"
          className={`${cell} hover:bg-ink hover:text-paper`}
        >
          <span className="text-[10px] font-semibold">05</span>
          <span>Blog ↗</span>
        </a>

        <DarkModeToggle className="h-14" />
      </nav>
    </header>
  );
}

export default NavBar;
