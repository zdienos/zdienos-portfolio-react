import { GitHubCalendar } from "react-github-calendar";
import Section, { Lead } from "../components/Section";
import Languages from "../components/Languages";
import { facts, stack, stackColumns, tools } from "../data/content";
import { useTheme } from "../contexts";

const pad = (n) => String(n).padStart(2, "0");

const calendarTheme = {
  light: ["#e3e3dd", "#c3caff", "#8a99ff", "#4d64ff", "#1d3bff"],
  dark: ["#1b1c21", "#28306b", "#3a49b3", "#5c6cf0", "#9ba6ff"],
};

const selectLastHalfYear = (contributions) => {
  const since = new Date();
  since.setMonth(since.getMonth() - 6);
  return contributions.filter((day) => new Date(day.date) >= since);
};

function About() {
  const { theme } = useTheme();

  return (
    <>
      <title>Mardino Santosa — About</title>

      <Lead>
        Hello there! I am Mardino Santosa from{" "}
        <span className="text-blue">Makassar, Indonesia</span> — a physicist
        by degree, a system administrator by trade.
      </Lead>

      <Section id="2.1" label="Profile">
        <dl className="border-t border-ink">
          {facts.map(([term, value]) => (
            <div
              key={term}
              className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-2.5 md:grid-cols-[9rem_1fr]"
            >
              <dt className="meta">{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[34em]">
          I am a Network and System Administrator, Full Stack Developer and
          Hardware Maintainer. Graduated with a Bachelor of Physics, with
          skills in electronics — especially microcontrollers — and
          self-taught computer knowledge.
        </p>
      </Section>

      <Section id="2.2" label="Stack">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[30rem] border-collapse text-left">
            <caption className="meta mb-2 text-left">
              Table 1 — Technologies by discipline
            </caption>
            <thead>
              <tr className="meta border-b border-ink">
                <th scope="col" className="pb-1 font-normal">Technology</th>
                {stackColumns.map((col) => (
                  <th key={col} scope="col" className="w-[13%] pb-1 text-center font-normal">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stack.map(({ Icon, name, in: groups }) => (
                <tr key={name} className="border-b border-line">
                  <th scope="row" className="py-2 font-normal">
                    <span className="flex items-center gap-3">
                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-mute" />
                      {name}
                    </span>
                  </th>
                  {stackColumns.map((col) => (
                    <td key={col} className="py-2 text-center">
                      {groups.includes(col) ? (
                        <span className="text-blue" aria-label="yes">●</span>
                      ) : (
                        <span className="text-line" aria-hidden="true">·</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="2.3" label="Environment">
        <ul className="grid grid-cols-2 border-t border-ink md:grid-cols-5">
          {tools.map(({ Icon, name }, i) => (
            <li
              key={name}
              className="flex flex-col gap-6 border-b border-line py-3 pr-3 md:border-r md:pl-3 md:first:pl-0 md:last:border-r-0"
            >
              <span className="font-mono text-xs text-mute">T.{pad(i + 1)}</span>
              <Icon aria-hidden="true" className="h-7 w-7" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="2.4" label="Activity">
        <p className="meta mb-3">Fig. 2 — GitHub contributions, last six months</p>
        <div className="overflow-x-auto pb-2 text-mute">
          <GitHubCalendar
            username="zdienos"
            colorScheme={theme}
            theme={calendarTheme}
            blockSize={12}
            blockMargin={3}
            blockRadius={0}
            fontSize={12}
            showWeekdayLabels
            showColorLegend={false}
            transformData={selectLastHalfYear}
          />
        </div>
      </Section>

      <Section id="2.5" label="Languages">
        <Languages />
      </Section>
    </>
  );
}

export default About;
