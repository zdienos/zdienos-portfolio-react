import React from "react";
import GitHubCalendar from "react-github-calendar";

const selectLastHalfYear = (contributions) => {
  const shownMonths = 6;
  const since = new Date();
  since.setMonth(since.getMonth() - shownMonths);
  return contributions.filter((day) => new Date(day.date) >= since);
};

// Colors resolve from CSS variables so the calendar follows light/dark mode
const theme = {
  level0: "var(--cal-0)",
  level1: "var(--cal-1)",
  level2: "var(--cal-2)",
  level3: "var(--cal-3)",
  level4: "var(--cal-4)",
};

function Github() {
  return (
    <div className="s-calendar">
      <GitHubCalendar
        username="zdienos"
        blockSize={13}
        blockMargin={4}
        blockRadius={0}
        theme={theme}
        fontSize={13}
        showWeekdayLabels
        transformData={selectLastHalfYear}
        hideColorLegend
      />
    </div>
  );
}

export default Github;
