import React, { useState, useEffect } from "react";
import fetchJsonp from "fetch-jsonp";

// const WakaChartURL =  "https://wakatime.com/share/@zdienos/87859afd-b87c-4e94-899e-a42ffe0f7b72.json"; //last year
// const WakaChartURL = "https://wakatime.com/share/@zdienos/0f82529f-2922-478d-afab-5b78745f01a8.json"; //30 day
// const WakaChartURL = 'https://wakatime.com/share/@zdienos/ba313035-ceeb-48b6-91fc-784abe4c4329.json'; //all the time
const WakaChartURL =  "https://wakatime.com/share/@zdienos/618218b9-cc3f-4100-bcf5-5f1e6c0a76d6.json"; //last 7 days

const MAX_COLUMNS = 8;

function Message({ children }) {
  return (
    <p className="border-b-2 border-ink px-4 py-10 text-xs font-bold uppercase tracking-widest">
      {children}
    </p>
  );
}

function Wakatime() {
  const [languages, setLanguages] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    fetchJsonp(WakaChartURL)
      .then((response) => response.json())
      .then((response) => {
        if (!active) return;
        setLanguages(
          [...response.data]
            .sort((a, b) => b.percent - a.percent)
            .slice(0, MAX_COLUMNS)
        );
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

  if (status === "loading") return <Message>Loading data…</Message>;
  if (status === "error") return <Message>Could not load WakaTime data.</Message>;
  if (languages.length === 0)
    return <Message>No coding activity recorded in the last 7 days.</Message>;

  const max = languages[0].percent || 100;

  return (
    <figure className="border-b-2 border-ink px-4 pb-6 pt-10">
      <ol className="flex h-80 items-end gap-2 border-b-2 border-ink md:gap-4">
        {languages.map(({ name, percent }, i) => (
          <li key={name} className="flex h-full min-w-0 flex-1 flex-col justify-end">
            <span className="mb-1 text-sm font-black font-condensed md:text-2xl">
              {Math.round(percent)}%
            </span>
            <span
              className={i === 0 ? "bg-signal" : "bg-ink"}
              style={{ height: `${Math.max((percent / max) * 100, 1)}%` }}
            />
          </li>
        ))}
      </ol>
      <ol className="flex gap-2 pt-2 md:gap-4">
        {languages.map(({ name }) => (
          <li
            key={name}
            className="min-w-0 flex-1 truncate text-[10px] font-bold uppercase tracking-wider md:text-xs"
            title={name}
          >
            {name}
          </li>
        ))}
      </ol>
      <figcaption className="mt-6 text-[10px] font-bold uppercase tracking-widest opacity-60">
        Share of coding time, last 7 days — source: WakaTime
      </figcaption>
    </figure>
  );
}
export default Wakatime;
