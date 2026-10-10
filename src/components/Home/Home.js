import React from "react";
import HomeSecond from "./HomeSecond";

const roles = [
  "Full 'Snack' Developer",
  "Network / System Administrator",
  "Open Source Contributor??",
];

function Home() {
  return (
    <>
      <section className="s-hero" id="home">
        <div className="s-container s-grid">
          <div className="s-hero__meta">
            <span className="s-meta">Portfolio</span>
            <span>Makassar, Indonesia</span>
          </div>
          <div className="s-hero__meta">
            <span className="s-meta">Discipline</span>
            <span>IT Administration &amp; Web Development</span>
          </div>

          <h1 className="s-display">
            Mardino
            <br />
            Santosa<span className="s-accent">.</span>
          </h1>

          <ol className="s-roles">
            {roles.map((role, i) => (
              <li key={role}>
                <span className="s-num">0{i + 1}</span>
                {role}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <HomeSecond />
    </>
  );
}

export default Home;
