import React from "react";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { to: "/", label: "Index", end: true },
  { to: "/about", label: "About" },
  { to: "/project", label: "Work" },
  { to: "/resume", label: "Resume" },
];

function NavBar() {
  return (
    <header className="s-header">
      <div className="s-container s-header__inner">
        <Link to="/" className="s-brand">
          <span className="s-brand__mark" aria-hidden="true" />
          Mardino Santosa
        </Link>

        <nav className="s-nav" aria-label="Primary">
          <ol>
            {links.map(({ to, label, end }, i) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `s-nav__link${isActive ? " is-active" : ""}`
                  }
                >
                  <span className="s-nav__num">0{i + 1}</span>
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                className="s-nav__link"
                href="https://blog.zdienos.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="s-nav__num">05</span>
                Blog&nbsp;↗
              </a>
            </li>
          </ol>
        </nav>

        <DarkModeToggle />
      </div>
    </header>
  );
}

export default NavBar;
