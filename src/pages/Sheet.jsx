import { useEffect, useState } from "react";
import { Link } from "react-router";
import Plate, { Stair } from "../components/Plate";
import Halftone from "../components/Halftone";
import Timeline from "../components/Timeline";
import Work from "../components/Work";
import Pulse from "../components/Pulse";
import { contacts, education, EMAIL, experience, kit, wins } from "../data/content";
import portrait from "../Assets/fotoME-min.jpg";

const YEAR = new Date().getFullYear();

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink px-4 pb-14 pt-8 md:px-6 md:pb-20">
      {/* overprinted shapes */}
      <span
        aria-hidden="true"
        className="overprint absolute -right-[12vw] -top-[8vw] h-[58vw] w-[58vw] rounded-full bg-cyan md:-right-[6vw] md:h-[44vw] md:w-[44vw]"
      />
      <span
        aria-hidden="true"
        className="overprint absolute right-[14vw] top-[24vw] h-[22vw] w-[40vw] -rotate-6 bg-magenta md:top-[14vw] md:h-[11vw] md:w-[26vw]"
      />

      <div className="label relative flex justify-between gap-4">
        <span>Mardino Santosa · Makassar</span>
        <span>Sheet {YEAR}</span>
      </div>

      <h1 className="relative mt-[18vw] text-[clamp(3.25rem,11.5vw,12rem)] font-black leading-[0.82] tracking-[-0.055em] md:mt-[8vw]">
        <span className="block">Networks</span>
        <span className="block pl-[0.6em] font-normal italic">that stay up.</span>
        <span className="block pl-[2.2em]">Apps</span>
        <span className="block pl-[2.8em] font-normal italic">that ship.</span>
      </h1>

      <div className="relative mt-12 grid gap-8 md:mt-16 md:grid-cols-12 md:gap-6">
        <p className="text-xl font-medium leading-snug tracking-tight md:col-span-6 md:col-start-4 md:text-2xl">
          I'm Mardino Santosa — zdienos online. Since {experience[0].from} I've
          been the person called when the network drops, the server fills up or
          the team needs an internal tool. Physics graduate, former lecturer, ten
          years running IT at a theme park, and a full-stack developer as well.
        </p>
        <p className="label self-end md:col-span-3 md:col-start-10 md:text-right">
          Sysadmin · Full-stack
          <br />
          Hardware · Teaching
        </p>
      </div>
    </section>
  );
}

function Portrait() {
  const [showPhoto, setShowPhoto] = useState(false);
  return (
    <section className="grid border-b-2 border-ink md:grid-cols-12">
      <figure className="relative border-b-2 border-ink md:col-span-5 md:border-b-0 md:border-r-2">
        {showPhoto ? (
          <img src={portrait} alt="Photo of Mardino Santosa" className="block w-full" />
        ) : (
          <Halftone src={portrait} alt="Halftone portrait of Mardino Santosa" ratio="1 / 1" cell={7} />
        )}
        <figcaption className="label flex items-center justify-between gap-4 border-t-2 border-ink px-4 py-3">
          <span>Fig. 1 — The author, {showPhoto ? "as photographed" : "in two inks"}</span>
          <button
            type="button"
            onClick={() => setShowPhoto((v) => !v)}
            className="shrink-0 hover:text-magenta"
            aria-pressed={showPhoto}
          >
            {showPhoto ? "Halftone" : "Photo"} ↺
          </button>
        </figcaption>
      </figure>

      <div className="flex flex-col justify-between gap-12 px-4 py-10 md:col-span-7 md:px-10 md:py-14">
        <p className="text-[clamp(1.75rem,3.4vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.035em]">
          Studied how the universe works.{" "}
          <span className="font-normal italic text-soft">
            Then spent the career making sure the Wi-Fi does.
          </span>
        </p>
        <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
          {education.map(({ from, to, org, what }) => (
            <div key={org} className="border-t-2 border-ink pt-2">
              <dt className="label text-soft">
                {from}–{to}
              </dt>
              <dd className="mt-1 font-bold leading-tight">{what}</dd>
              <dd className="text-sm text-soft">{org}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Years() {
  return (
    <Plate id="years" no="01" title="Fifteen years, five desks">
      <Stair lines={["Fifteen years,", "five desks."]} className="mb-14" />
      <Timeline />
      <ol className="mt-14 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        {[...experience].reverse().map(({ from, to, org, role, note }) => (
          <li key={org} className="border-t-2 border-ink pt-3">
            <p className="label text-magenta">{from === to ? from : `${from}–${to}`}</p>
            <h3 className="mt-2 text-xl font-black leading-tight tracking-tight">{role}</h3>
            <p className="text-soft">{org}</p>
            <p className="mt-3 max-w-prose">{note}</p>
          </li>
        ))}
      </ol>
    </Plate>
  );
}

function Wins() {
  return (
    <Plate id="wins" no="03" title="On the podium">
      <ul className="grid gap-12 md:grid-cols-2 md:gap-6">
        {wins.map(({ place, year, title, by, href }, i) => (
          <li key={title} className="relative">
            <span
              aria-hidden="true"
              className={`overprint absolute -left-2 -top-4 h-40 w-40 rounded-full md:h-56 md:w-56 ${
                i ? "bg-cyan" : "bg-magenta"
              }`}
            />
            <p className="relative text-[clamp(6rem,16vw,14rem)] font-black leading-[0.8] tracking-[-0.06em]">
              {place}
            </p>
            <div className="relative mt-6 border-t-2 border-ink pt-3">
              <p className="label">{year} · {by}</p>
              <p className="mt-1 text-2xl font-bold leading-tight tracking-tight">{title}</p>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="label mt-3 inline-block border-b-2 border-magenta pb-0.5 hover:text-magenta"
              >
                The story ↗
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Plate>
  );
}

function Kit() {
  return (
    <Plate id="kit" no="04" title="The toolbox">
      <dl className="border-t-2 border-ink">
        {kit.map(({ group, items }, row) => (
          <div
            key={group}
            className="grid gap-2 border-b border-ink/25 py-4 md:grid-cols-[8rem_1fr] md:items-baseline"
          >
            <dt className="label text-soft">{group}</dt>
            <dd
              className="flex flex-wrap gap-x-4 gap-y-1 text-[clamp(1.5rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.03em]"
              style={{ paddingLeft: `${(row % 3) * 6}%` }}
            >
              {items.map((item, i) => (
                <span key={item} className={i % 2 ? "font-light italic" : "font-black"}>
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Plate>
  );
}

function Contact() {
  return (
    <Plate id="contact" no="06" title="Say halo">
      <Stair lines={["Say", "halo."]} className="mb-10 text-[clamp(4rem,14vw,13rem)]" />
      <a
        href={`mailto:${EMAIL}`}
        className="block break-all text-[clamp(1.4rem,4.2vw,3.5rem)] font-bold leading-tight tracking-[-0.03em] underline decoration-magenta decoration-4 underline-offset-8 hover:text-magenta"
      >
        {EMAIL}
      </a>
      <ul className="mt-12 grid border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
        {contacts
          .filter((c) => c.name !== "Email")
          .map(({ name, value, href }) => (
            <li key={name} className="border-b border-ink/25">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-baseline justify-between gap-3 py-3 pr-4 hover:text-magenta"
              >
                <span className="font-bold">{name}</span>
                <span className="truncate text-sm text-soft">{value}</span>
              </a>
            </li>
          ))}
      </ul>
      <p className="label mt-12 text-soft">
        Prefer paper? <Link to="/resume" className="text-ink underline decoration-magenta decoration-2 underline-offset-4">Read the CV</Link>.
      </p>
    </Plate>
  );
}

function Sheet({ section, hash = "" }) {
  // Old routes (/about, /project) and #hash links land on their plate
  useEffect(() => {
    const id = section || hash.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) requestAnimationFrame(() => el.scrollIntoView());
  }, [section, hash]);

  return (
    <>
      <title>Mardino Santosa — zdienos</title>
      <Hero />
      <Portrait />
      <Years />
      <Plate id="work" no="02" title="Things I've built">
        <Stair lines={["Things", "I've built."]} className="mb-14" />
        <Work />
      </Plate>
      <Wins />
      <Kit />
      <Plate id="pulse" no="05" title="Still at it">
        <Stair lines={["Still", "at it."]} className="mb-14" />
        <Pulse />
      </Plate>
      <Contact />
    </>
  );
}

export default Sheet;
