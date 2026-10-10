import { useEffect, useState } from "react";
import fetchJsonp from "fetch-jsonp";
import { WAKATIME_URL } from "../data/content";

const MAX_ROWS = 7;

// Collapse the long tail into a single "Other" row so the bar stays legible
function summarise(data) {
  const sorted = [...data].sort((a, b) => b.percent - a.percent);
  const head = sorted.slice(0, MAX_ROWS);
  const rest = sorted.slice(MAX_ROWS).reduce((sum, l) => sum + l.percent, 0);
  return rest > 0 ? [...head, { name: "Other", percent: rest }] : head;
}

// Steps from full blue toward the paper colour, one shade per row
const shade = (i, n) =>
  `color-mix(in srgb, var(--blue) ${Math.round(100 - (i / Math.max(n, 1)) * 80)}%, var(--paper))`;

function Languages() {
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    fetchJsonp(WAKATIME_URL)
      .then((res) => res.json())
      .then((res) => {
        if (!active) return;
        setRows(summarise(res.data || []));
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, []);

  if (status === "loading") return <p className="meta">Loading WakaTime data…</p>;
  if (status === "error") return <p className="meta">Could not load WakaTime data.</p>;
  if (rows.length === 0)
    return <p className="meta">No coding activity recorded in the last 7 days.</p>;

  return (
    <figure>
      <figcaption className="meta mb-3">
        Fig. 3 — Share of coding time, last 7 days (WakaTime)
      </figcaption>
      <div className="flex h-10 gap-px" role="img" aria-label="Share of coding time per language">
        {rows.map(({ name, percent }, i) => (
          <span
            key={name}
            style={{ width: `${percent}%`, background: shade(i, rows.length) }}
          />
        ))}
      </div>
      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr className="meta border-b border-ink text-left">
            <th className="w-8 pb-1 font-normal" />
            <th className="pb-1 font-normal">Language</th>
            <th className="pb-1 text-right font-normal">Share</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ name, percent }, i) => (
            <tr key={name} className="border-b border-line">
              <td className="py-2">
                <span
                  className="block h-3 w-3"
                  style={{ background: shade(i, rows.length) }}
                />
              </td>
              <td className="py-2">{name}</td>
              <td className="py-2 text-right font-mono text-xs">{percent.toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

export default Languages;
