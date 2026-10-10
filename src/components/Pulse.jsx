import { useEffect, useState } from "react";
import fetchJsonp from "fetch-jsonp";
import { GitHubCalendar } from "react-github-calendar";
import { WAKATIME_URL } from "../data/content";
import { useTheme } from "../theme";

const calendarTheme = {
  light: ["#dcdbd2", "#9fdcf5", "#00a3e0", "#b4378f", "#e5007d"],
  dark: ["#232323", "#0b4f6e", "#19b8ff", "#b0377a", "#ff2f97"],
};

const selectLastHalfYear = (contributions) => {
  const since = new Date();
  since.setMonth(since.getMonth() - 6);
  return contributions.filter((day) => new Date(day.date) >= since);
};

function Languages() {
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    fetchJsonp(WAKATIME_URL)
      .then((res) => res.json())
      .then((res) => {
        if (!active) return;
        setRows([...(res.data || [])].sort((a, b) => b.percent - a.percent).slice(0, 6));
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, []);

  if (status === "loading") return <p className="label text-soft">Asking WakaTime…</p>;
  if (status === "error") return <p className="label text-soft">WakaTime did not answer.</p>;
  if (rows.length === 0)
    return (
      <p className="text-xl font-bold tracking-tight">
        Quiet week — no coding time logged in the last seven days.
      </p>
    );

  return (
    <ol className="space-y-3">
      {rows.map(({ name, percent }, i) => (
        <li key={name}>
          <div className="flex items-baseline justify-between">
            <span className="font-bold">{name}</span>
            <span className="text-sm text-soft">{percent.toFixed(1)}%</span>
          </div>
          <span
            className={`overprint mt-1 block h-3 ${i % 2 ? "bg-magenta" : "bg-cyan"}`}
            style={{ width: `${Math.max(percent, 1)}%` }}
          />
        </li>
      ))}
    </ol>
  );
}

function Pulse() {
  const { theme } = useTheme();
  return (
    <div className="grid gap-14 md:grid-cols-12 md:gap-6">
      <figure className="md:col-span-7">
        <div className="overflow-x-auto pb-2 text-soft">
          <GitHubCalendar
            username="zdienos"
            colorScheme={theme}
            theme={calendarTheme}
            blockSize={13}
            blockMargin={3}
            blockRadius={7}
            fontSize={12}
            showWeekdayLabels
            showColorLegend={false}
            transformData={selectLastHalfYear}
          />
        </div>
        <figcaption className="label mt-3 text-soft">
          Fig. 3 — GitHub contributions, last six months
        </figcaption>
      </figure>
      <div className="md:col-span-4 md:col-start-9">
        <h3 className="label mb-4">This week, by language</h3>
        <Languages />
      </div>
    </div>
  );
}

export default Pulse;
