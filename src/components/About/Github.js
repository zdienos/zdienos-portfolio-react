import React from "react";
import GitHubCalendar from "react-github-calendar";

const selectLastHalfYear = (contributions) => {
  const since = new Date();
  since.setMonth(since.getMonth() - 6);
  return contributions.filter((day) => new Date(day.date) >= since);
};

// Drawn on the red field, so the scale runs from faint black to solid black
const theme = {
  level0: "rgba(0, 0, 0, 0.12)",
  level1: "rgba(0, 0, 0, 0.32)",
  level2: "rgba(0, 0, 0, 0.55)",
  level3: "rgba(0, 0, 0, 0.78)",
  level4: "#000000",
};

function Github() {
  return (
    <section className="border-b-2 border-ink bg-signal text-black">
      <div className="flex items-end justify-between gap-4 border-b-2 border-black px-4 pb-3 pt-14 md:pt-20">
        <h2 className="text-6xl font-black uppercase leading-[0.8] tracking-tight font-condensed md:text-[8vw]">
          Activity
        </h2>
        <p className="shrink-0 pb-1 text-right text-xs font-bold uppercase tracking-widest">
          04
          <br />
          Days I code
        </p>
      </div>
      <div className="overflow-x-auto py-10 pl-12 pr-4 md:py-14 [&_text]:!fill-black">
        <GitHubCalendar
          username="zdienos"
          blockSize={16}
          blockMargin={4}
          blockRadius={0}
          theme={theme}
          fontSize={13}
          showWeekdayLabels
          transformData={selectLastHalfYear}
          hideColorLegend
        />
      </div>
    </section>
  );
}

export default Github;
