import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCards";
import { PageHead } from "../Heads";

const npointURL = "https://api.npoint.io/b5c3511ff95746384e06";

function Projects() {
  const [projects, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activeKey, setActiveKey] = useState("webapp");

  useEffect(() => {
    let active = true;
    axios(npointURL)
      .then((result) => {
        if (active) setData(result.data.projects || []);
      })
      .catch((ex) => console.log("fetch projects failed", ex))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const current = projects.find(({ key }) => key === activeKey) || projects[0];

  return (
    <>
      <PageHead kicker="My recent works" title="Works">
        <p className="text-lg font-semibold">
          Here are a few projects I've worked on.
        </p>
      </PageHead>

      <div
        role="tablist"
        aria-label="Project categories"
        className="grid grid-cols-2 gap-[2px] border-b-2 border-ink bg-ink"
      >
        {projects.map(({ key, title, data }) => {
          const selected = current && current.key === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveKey(key)}
              className={`flex items-start justify-between px-4 py-4 text-left text-4xl font-black uppercase leading-none font-condensed transition-colors md:text-7xl ${
                selected
                  ? "bg-signal text-black"
                  : "bg-paper hover:bg-ink hover:text-paper"
              }`}
            >
              {title}
              <span className="font-sans text-xs font-bold">
                {String(data ? data.length : 0).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      {isLoading && (
        <p className="border-b-2 border-ink px-4 py-10 text-xs font-bold uppercase tracking-widest">
          Loading projects…
        </p>
      )}

      {current && current.data && (
        <ol role="tabpanel">
          {current.data.map(
            ({ id, imgpath, isblog, title, description, link }, i) => (
              <li key={id}>
                <ProjectCard
                  index={i + 1}
                  flip={i % 2 === 1}
                  imgPath={imgpath}
                  isBlog={isblog}
                  title={title}
                  description={description}
                  link={link}
                />
              </li>
            )
          )}
        </ol>
      )}
    </>
  );
}

export default Projects;
