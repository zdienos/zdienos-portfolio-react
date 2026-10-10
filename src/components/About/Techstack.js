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

export function Cells({ items }) {
  return (
    <ul className="s-cells">
      {items.map(({ Icon, name }, i) => (
        <li key={name} className="s-cell">
          <span className="s-cell__num">{String(i + 1).padStart(2, "0")}</span>
          <Icon className="s-cell__icon" aria-hidden="true" />
          <span className="s-cell__name">{name}</span>
        </li>
      ))}
    </ul>
  );
}

function Techstack() {
  return <Cells items={stack} />;
}

export default Techstack;
