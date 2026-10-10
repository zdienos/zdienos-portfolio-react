import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="overflow-hidden bg-ink text-paper">
      <div className="grid grid-cols-2 gap-[2px] bg-paper/20 md:grid-cols-4">
        <div className="bg-ink p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
            Copyright
          </p>
          <p className="mt-2 font-semibold">© {year} zdienos</p>
        </div>
        <div className="bg-ink p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
            Based in
          </p>
          <p className="mt-2 font-semibold">Makassar, Indonesia</p>
        </div>
        <div className="bg-ink p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
            Write to
          </p>
          <a
            href="https://t.me/zdienos"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block font-semibold hover:text-signal"
          >
            t.me/zdienos ↗
          </a>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-ink p-4 text-left font-semibold transition-colors hover:bg-signal hover:text-black"
        >
          <span className="block text-[10px] font-bold uppercase tracking-widest opacity-60">
            Return
          </span>
          <span className="mt-2 block">Back to top ↑</span>
        </button>
      </div>
      <p
        aria-hidden="true"
        className="-mb-[5vw] select-none px-2 text-[26vw] font-black uppercase leading-[0.8] tracking-tighter text-signal font-condensed"
      >
        zdienos
      </p>
    </footer>
  );
}

export default Footer;
