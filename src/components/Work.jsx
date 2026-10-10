import { useEffect, useState } from "react";
import axios from "axios";
import { PROJECTS_URL, sideProjects, websites } from "../data/content";

const pad = (n) => String(n).padStart(2, "0");
const asset = (path) => (/^(https?:)?\//.test(path) ? path : `/${path}`);

// Desktop placement: projects drift across the grid instead of sitting in rows
const placement = [
  "md:col-span-7 md:col-start-1",
  "md:col-span-5 md:col-start-8 md:mt-32",
  "md:col-span-5 md:col-start-2 md:mt-8",
  "md:col-span-6 md:col-start-7 md:mt-36",
  "md:col-span-6 md:col-start-1 md:mt-8",
  "md:col-span-5 md:col-start-8 md:mt-32",
];

function Project({ project, index }) {
  const { imgpath, isblog, title, description, link } = project;
  const hasLink = link && link !== "#";
  return (
    <article className={`group ${placement[(index - 1) % placement.length]}`}>
      <div className="relative overflow-hidden bg-cyan">
        <img
          src={asset(imgpath)}
          alt={`Screenshot of ${title}`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top grayscale contrast-125 mix-blend-multiply transition duration-500 group-hover:mix-blend-normal group-hover:grayscale-0"
        />
        <span className="overprint pointer-events-none absolute -bottom-6 -right-4 text-[7rem] font-black leading-none text-magenta">
          {pad(index)}
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-black tracking-tight md:text-3xl">{title}</h3>
      <p className="mt-2 max-w-md text-soft">{description}</p>
      {hasLink ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="label mt-4 inline-block border-b-2 border-magenta pb-0.5 hover:text-magenta"
        >
          {isblog ? "Read the post" : "Open the demo"} ↗
        </a>
      ) : (
        <p className="label mt-4 text-soft">Internal — no public demo</p>
      )}
    </article>
  );
}

function Work() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();
    axios(PROJECTS_URL, { signal: controller.signal })
      .then(({ data }) => {
        setProjects((data.projects || []).flatMap((g) => g.data || []));
        setStatus("ready");
      })
      .catch((err) => {
        if (!axios.isCancel(err)) setStatus("error");
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      {status === "loading" && <p className="label text-soft">Fetching projects…</p>}
      {status === "error" && <p className="label text-soft">The project list could not be loaded.</p>}

      <div className="grid gap-14 md:grid-cols-12 md:gap-x-6 md:gap-y-16">
        {projects.map((p, i) => (
          <Project key={p.id} project={p} index={i + 1} />
        ))}
      </div>

      <div className="mt-24 grid gap-12 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-6">
          <h3 className="label mb-3">Also built</h3>
          <ul className="border-t-2 border-ink">
            {sideProjects.map(({ name, where, tech }) => (
              <li key={name} className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-ink/25 py-2.5">
                <span className="font-bold">{name}</span>
                <span className="text-right text-sm text-soft">{where}</span>
                <span className="col-span-2 text-sm text-soft">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <h3 className="label mb-3">Websites shipped — {websites.length}</h3>
          <ul className="flex flex-wrap gap-x-3 gap-y-1 border-t-2 border-ink pt-3 text-xl font-bold leading-snug tracking-tight md:text-2xl">
            {websites.map((site, i) => (
              <li key={site} className={i % 3 === 1 ? "font-normal italic" : ""}>
                {site}
                {i < websites.length - 1 && <span className="text-magenta"> /</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Work;
