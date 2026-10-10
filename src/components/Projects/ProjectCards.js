import React from "react";

function ProjectCards({ index, flip, imgPath, isBlog, title, description, link }) {
  const hasLink = link && link !== "#";
  return (
    <article className="group grid grid-cols-12 gap-[2px] border-b-2 border-ink bg-ink">
      <div className="col-span-2 bg-paper p-4 md:col-span-1">
        <span className="text-3xl font-black leading-none text-signal font-condensed md:text-5xl">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <div
        className={`relative col-span-10 aspect-[4/3] overflow-hidden bg-signal md:col-span-6 ${
          flip ? "md:order-last" : ""
        }`}
      >
        <img
          src={imgPath}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 mix-blend-multiply transition duration-500 group-hover:mix-blend-normal group-hover:grayscale-0"
        />
      </div>

      <div className="col-span-12 flex flex-col bg-paper p-4 md:col-span-5 md:p-8">
        <h3 className="text-5xl font-black uppercase leading-[0.85] tracking-tight font-condensed md:text-7xl">
          {title}
        </h3>
        <p className="mt-6 max-w-md flex-1 text-[15px] leading-relaxed">
          {description}
        </p>
        {hasLink ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-between self-stretch border-2 border-ink px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors hover:border-signal hover:bg-signal hover:text-black md:self-start md:min-w-[14rem]"
          >
            {isBlog ? "View blog" : "View project"}
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <p className="mt-8 text-[10px] font-bold uppercase tracking-widest opacity-60">
            Private project — no public demo
          </p>
        )}
      </div>
    </article>
  );
}
export default ProjectCards;
