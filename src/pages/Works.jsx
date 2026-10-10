import { useEffect, useState } from "react";
import axios from "axios";
import Section, { Lead } from "../components/Section";
import { PROJECTS_URL } from "../data/content";
import { usePreview } from "../contexts";

const pad = (n) => String(n).padStart(2, "0");
const asset = (path) => (/^(https?:)?\//.test(path) ? path : `/${path}`);

function WorkRow({ work, index }) {
  const { setPreview } = usePreview();
  const { imgpath, isblog, title, description, link } = work;
  const hasLink = link && link !== "#";
  const show = () => setPreview({ img: asset(imgpath), title, index });

  const body = (
    <>
      <span className="font-mono text-xs text-mute group-hover:text-inherit">
        {pad(index)}
      </span>
      <span className="min-w-0">
        <span className="block text-xl font-light tracking-tight lg:text-2xl">
          {title}
        </span>
        <span className="mt-1 block max-w-[36em] text-mute group-hover:text-inherit">
          {description}
        </span>
        <img
          src={asset(imgpath)}
          alt=""
          loading="lazy"
          className="mt-3 aspect-[16/10] w-full object-cover lg:hidden"
        />
      </span>
      <span className="font-mono text-xs">
        {hasLink ? (isblog ? "Blog ↗" : "Demo ↗") : "Private"}
      </span>
    </>
  );

  const rowClass =
    "group -mx-2 grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 px-2 py-4 transition-colors";

  return (
    <li className="border-b border-line" onMouseEnter={show} onFocus={show}>
      {hasLink ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`${rowClass} hover:bg-blue hover:text-paper focus-visible:bg-blue focus-visible:text-paper`}
        >
          {body}
        </a>
      ) : (
        <div className={rowClass}>{body}</div>
      )}
    </li>
  );
}

function Works() {
  const { setPreview } = usePreview();
  const [groups, setGroups] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();
    axios(PROJECTS_URL, { signal: controller.signal })
      .then(({ data }) => {
        setGroups(data.projects || []);
        setStatus("ready");
      })
      .catch((err) => {
        if (!axios.isCancel(err)) setStatus("error");
      });
    return () => controller.abort();
  }, []);

  const total = groups.reduce((n, g) => n + (g.data?.length || 0), 0);

  return (
    <>
      <title>Mardino Santosa — Works</title>

      <Lead>
        A few projects I've worked on —{" "}
        <span className="text-blue">
          {status === "ready" ? `${total} entries` : "web and desktop"}
        </span>
        , from IT asset management to dealer systems.
      </Lead>

      {status === "loading" && (
        <Section id="3.0" label="Index">
          <p className="meta">Loading projects…</p>
        </Section>
      )}
      {status === "error" && (
        <Section id="3.0" label="Index">
          <p className="meta">Could not load the project list.</p>
        </Section>
      )}

      {groups.map(({ key, title, data = [] }, g) => (
        <Section key={key} id={`3.${g + 1}`} label={`${title} — ${pad(data.length)}`}>
          {g === 0 && (
            <p className="meta mb-1 hidden lg:block">Hover a row to preview it on the left.</p>
          )}
          <ol className="border-t border-ink" onMouseLeave={() => setPreview(null)}>
            {data.map((work, i) => (
              <WorkRow key={work.id} work={work} index={i + 1} />
            ))}
          </ol>
        </Section>
      ))}
    </>
  );
}

export default Works;
