import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCards";

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
      <section className="s-page-head">
        <div className="s-container s-grid">
          <span className="s-meta s-page-head__meta">Selected work</span>
          <h1 className="s-display s-display--md">
            Recent works<span className="s-accent">.</span>
          </h1>
          <p className="s-page-head__lead">
            Here are a few projects I've worked on.
          </p>
        </div>
      </section>

      <section className="s-section">
        <div className="s-container">
          <div className="s-tabs" role="tablist" aria-label="Project categories">
            {projects.map(({ key, title, data }) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={current && current.key === key}
                className={`s-tab${current && current.key === key ? " is-active" : ""}`}
                onClick={() => setActiveKey(key)}
              >
                {title}
                <sup>{data ? data.length : 0}</sup>
              </button>
            ))}
          </div>

          {isLoading && <p className="s-meta">Loading projects…</p>}

          {current && current.data && (
            <ul className="s-works" role="tabpanel">
              {current.data.map(
                ({ id, imgpath, isblog, title, description, link }, i) => (
                  <li key={id}>
                    <ProjectCard
                      index={i + 1}
                      imgPath={imgpath}
                      isBlog={isblog}
                      title={title}
                      description={description}
                      link={link}
                    />
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;
