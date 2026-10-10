import { experience, FIRST_YEAR, LAST_YEAR } from "../data/content";

const SPAN = LAST_YEAR - FIRST_YEAR + 1;
const years = Array.from({ length: SPAN }, (_, i) => FIRST_YEAR + i);
const pos = (year) => ((year - FIRST_YEAR) / SPAN) * 100;

// A Gantt of the CV: one bar per job, inks alternating and overprinting
function Timeline() {
  return (
    <figure>
      <div className="relative">
        {/* year ticks */}
        <div className="label relative mb-2 ml-0 h-4 text-soft md:ml-[28%]">
          {years.map((y) => (
            <span
              key={y}
              className={`absolute ${y % 5 === 2 || y === LAST_YEAR ? "" : "hidden md:inline"}`}
              style={{ left: `${pos(y)}%` }}
            >
              {String(y).slice(2)}
            </span>
          ))}
        </div>

        <ol className="border-t-2 border-ink">
          {experience.map(({ from, to, org, role }, i) => (
            <li
              key={org}
              className="grid gap-1 border-b border-ink/25 py-3 md:grid-cols-[28%_1fr] md:items-center md:gap-0"
            >
              <p className="pr-4 leading-tight">
                <span className="font-bold">{org}</span>
                <br />
                <span className="text-sm text-soft">
                  {role}
                  <span className="md:hidden"> · {from === to ? from : `${from}–${to}`}</span>
                </span>
              </p>
              <div className="relative h-7">
                {years.map((y) => (
                  <span
                    key={y}
                    aria-hidden="true"
                    className="absolute inset-y-0 w-px bg-ink/10"
                    style={{ left: `${pos(y)}%` }}
                  />
                ))}
                <span
                  className={`overprint absolute inset-y-0 flex items-center px-2 text-[11px] font-bold text-black ${
                    i % 2 ? "bg-magenta" : "bg-cyan"
                  }`}
                  style={{ left: `${pos(from)}%`, width: `${((to - from + 1) / SPAN) * 100}%` }}
                >
                  <span className="hidden truncate md:inline">
                    {from === to ? from : `${from}–${String(to).slice(2)}`}
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="label mt-3 text-soft">
        Fig. 2 — Employment {FIRST_YEAR}–{LAST_YEAR}, from the CV
      </figcaption>
    </figure>
  );
}

export default Timeline;
