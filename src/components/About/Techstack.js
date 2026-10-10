import React from "react";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMysql,
  DiGit,
  DiDocker,
  DiCodeigniter,
  DiLaravel,
} from "react-icons/di";
import { SiKubernetes } from "react-icons/si";

const stack = [
  { Icon: DiHtml5, name: "HTML5" },
  { Icon: DiCss3, name: "CSS3" },
  { Icon: DiJavascript1, name: "JavaScript" },
  { Icon: DiNodejs, name: "Node.js" },
  { Icon: DiReact, name: "React" },
  { Icon: DiMysql, name: "MySQL" },
  { Icon: DiDocker, name: "Docker" },
  { Icon: SiKubernetes, name: "Kubernetes" },
  { Icon: DiGit, name: "Git" },
  { Icon: DiCodeigniter, name: "CodeIgniter" },
  { Icon: DiLaravel, name: "Laravel" },
];

// Typographic set: the words are the composition, icons sit as superscripts
export function WordList({ items, size = "text-5xl md:text-[7vw]" }) {
  return (
    <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b-2 border-ink px-4 py-8 md:gap-x-8 md:py-12">
      {items.map(({ Icon, name }, i) => (
        <li
          key={name}
          className={`group flex items-start font-black uppercase leading-[0.9] tracking-tight font-condensed transition-colors hover:text-signal ${size}`}
        >
          {name}
          <span className="ml-1 mt-1 flex flex-col items-center text-xs font-bold tracking-normal font-sans">
            <span>{String(i + 1).padStart(2, "0")}</span>
            <Icon aria-hidden="true" className="mt-1 text-xl opacity-60 group-hover:opacity-100" />
          </span>
          {i < items.length - 1 && (
            <span aria-hidden="true" className="ml-4 text-signal md:ml-8">
              /
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function Techstack() {
  return <WordList items={stack} />;
}

export default Techstack;
