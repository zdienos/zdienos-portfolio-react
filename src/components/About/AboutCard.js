import React from "react";

const facts = [
  ["Name", "Mardino Santosa"],
  ["Based in", "Makassar, Indonesia"],
  ["Education", "Bachelor of Physics"],
  ["Roles", "Network & System Administrator, Full Stack Developer, Hardware Maintainer"],
  ["Also into", "Electronics, especially microcontrollers"],
];

function AboutCard() {
  return (
    <section className="grid grid-cols-12 gap-[2px] border-b-2 border-ink bg-ink">
      <div className="col-span-12 bg-paper p-4 md:col-span-7 md:p-8">
        <p className="text-xs font-bold uppercase tracking-widest">
          <span className="text-signal">01</span> — Profile
        </p>
        <p className="mt-8 text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
          Hello there! I am Mardino Santosa from{" "}
          <span className="text-signal">Makassar, Indonesia.</span>
        </p>
        <p className="mt-8 max-w-xl text-[15px] leading-relaxed">
          I am a Network and System Administrator, Full Stack Developer and
          Hardware Maintainer. Graduated with a Bachelor of Physics, with
          skills in electronics — especially microcontrollers — and
          self-taught computer knowledge.
        </p>
      </div>
      <dl className="col-span-12 bg-paper md:col-span-5">
        {facts.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-b-2 border-ink px-4 py-4 last:border-b-0"
          >
            <dt className="text-[10px] font-bold uppercase tracking-widest">
              {label}
            </dt>
            <dd className="font-semibold leading-snug">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default AboutCard;
