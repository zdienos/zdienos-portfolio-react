import React from "react";
import { SiLinux, SiApple, SiVisualstudiocode, SiPostman } from "react-icons/si";
import { DiTerminal } from "react-icons/di";

const tools = [
  { Icon: SiLinux, name: "Linux" },
  { Icon: SiApple, name: "macOS" },
  { Icon: SiVisualstudiocode, name: "VS Code" },
  { Icon: SiPostman, name: "Postman" },
  { Icon: DiTerminal, name: "Terminal" },
];

function Toolstack() {
  return (
    <ul className="grid grid-cols-2 gap-[2px] border-b-2 border-ink bg-ink md:grid-cols-5">
      {tools.map(({ Icon, name }, i) => (
        <li
          key={name}
          className="group flex aspect-square flex-col justify-between bg-paper p-4 transition-colors hover:bg-signal hover:text-black last:col-span-2 last:aspect-auto md:last:col-span-1 md:last:aspect-square"
        >
          <span className="text-xs font-bold">0{i + 1}</span>
          <Icon aria-hidden="true" className="h-1/3 w-auto self-center" />
          <span className="text-2xl font-black uppercase font-condensed md:text-4xl">
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Toolstack;
