import React from "react";

// Full-bleed black page title with an off-grid red circle
export function PageHead({ kicker, title, children }) {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-ink text-paper">
      <div
        aria-hidden="true"
        className="absolute -right-[12vw] -top-[18vw] h-[46vw] w-[46vw] rounded-full bg-signal"
      />
      <div className="relative grid grid-cols-12 gap-4 px-4 pb-6 pt-10 md:pt-16">
        <p className="col-span-12 text-xs font-bold uppercase tracking-widest md:col-span-3">
          {kicker}
        </p>
        <h1 className="col-span-12 mt-16 text-[19vw] font-black uppercase leading-[0.8] tracking-tight font-condensed md:mt-24 md:text-[14vw]">
          {title}
        </h1>
        {children && (
          <div className="col-span-12 mt-6 md:col-span-5 md:col-start-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

// Section title strip: huge condensed word on the left, index on the right
export function SectionHead({ num, label, title }) {
  return (
    <div className="flex items-end justify-between gap-4 border-b-2 border-ink px-4 pb-3 pt-14 md:pt-20">
      <h2 className="text-6xl font-black uppercase leading-[0.8] tracking-tight font-condensed md:text-[8vw]">
        {title}
      </h2>
      <p className="shrink-0 pb-1 text-right text-xs font-bold uppercase tracking-widest">
        <span className="text-signal">{num}</span>
        <br />
        {label}
      </p>
    </div>
  );
}
