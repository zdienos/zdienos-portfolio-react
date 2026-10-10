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
      <section className="relative flex min-h-[calc(100svh-3.5rem)] flex-col overflow-hidden border-b-2 border-ink bg-signal text-black">
        {/* Geometric composition */}
        <div
          aria-hidden="true"
          className="absolute -right-[14vw] -top-[16vw] h-[64vw] w-[64vw] rounded-full bg-paper"
        />
        <div
          aria-hidden="true"
          className="absolute right-[27vw] top-[5vw] hidden h-[9vw] w-[9vw] rounded-full bg-ink md:block"
        />

        <div className="relative grid grid-cols-12 gap-4 px-4 pt-4 text-xs font-bold uppercase tracking-widest">
          <p className="col-span-6 md:col-span-3">
            Portfolio
            <br />
            Nº {new Date().getFullYear()}
          </p>
          <p className="col-span-6 md:col-span-3">
            Makassar
            <br />
            Indonesia
          </p>
        </div>

        <p className="writing-vertical absolute bottom-40 right-4 hidden rotate-180 text-xs font-bold uppercase tracking-[0.3em] md:block">
          IT Administrator — Full Stack Developer
        </p>

        <h1 className="relative mt-auto px-3 pt-24 text-[25vw] font-black uppercase leading-[0.76] tracking-[-0.02em] font-condensed md:text-[21vw]">
          Mardino
          <br />
          Santosa
        </h1>

        <ol className="relative mt-6 grid border-t-2 border-black md:grid-cols-3">
          {roles.map((role, i) => (
            <li
              key={role}
              className="flex items-baseline gap-4 border-b-2 border-black px-4 py-3 text-lg font-bold uppercase leading-tight font-semicondensed last:border-b-0 md:border-b-0 md:border-r-2 md:py-5 md:text-xl md:last:border-r-0"
            >
              <span className="text-xs">0{i + 1}</span>
              {role}
            </li>
          ))}
        </ol>
      </section>
      <HomeSecond />
    </>
  );
}

export default Home;
