import React, { useState, useEffect } from "react";
import fetchJsonp from "fetch-jsonp";

// const WakaChartURL =  "https://wakatime.com/share/@zdienos/87859afd-b87c-4e94-899e-a42ffe0f7b72.json"; //last year
// const WakaChartURL = "https://wakatime.com/share/@zdienos/0f82529f-2922-478d-afab-5b78745f01a8.json"; //30 day
// const WakaChartURL = 'https://wakatime.com/share/@zdienos/ba313035-ceeb-48b6-91fc-784abe4c4329.json'; //all the time
const WakaChartURL =  "https://wakatime.com/share/@zdienos/618218b9-cc3f-4100-bcf5-5f1e6c0a76d6.json"; //last 7 days

const MAX_ROWS = 10;

function Wakatime() {
  const [languages, setLanguages] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    fetchJsonp(WakaChartURL)
      .then((response) => response.json())
      .then((response) => {
        if (!active) return;
        const sorted = [...response.data]
          .sort((a, b) => b.percent - a.percent)
          .slice(0, MAX_ROWS);
        setLanguages(sorted);
        setStatus("ready");
      })
      .catch((ex) => {
        console.log("parsing failed", ex);
        if (active) setStatus("error");
      });
    return () => {
      active = false;
    };
  }, []);

  if (status === "loading") return <p className="s-meta">Loading data…</p>;
  if (status === "error")
    return <p className="s-meta">Could not load WakaTime data.</p>;

  if (languages.length === 0)
    return <p className="s-meta">No coding activity recorded in the last 7 days.</p>;

  const max = languages[0] ? languages[0].percent : 100;

  return (
    <figure className="s-bars">
      <ol>
        {languages.map(({ name, percent }, i) => (
          <li key={name} className={i === 0 ? "is-top" : undefined}>
            <span className="s-bars__name">{name}</span>
            <span className="s-bars__track">
              <span
                className="s-bars__fill"
                style={{ width: `${(percent / max) * 100}%` }}
              />
            </span>
            <span className="s-bars__value">{percent.toFixed(1)}%</span>
          </li>
        ))}
      </ol>
      <figcaption className="s-meta">
        Share of coding time over the last 7 days — WakaTime
      </figcaption>
    </figure>
  );
}
export default Wakatime;
