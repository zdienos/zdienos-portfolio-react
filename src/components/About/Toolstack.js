import React from "react";
import { SiLinux, SiApple, SiVisualstudiocode, SiPostman } from "react-icons/si";
import { DiTerminal } from "react-icons/di";
import { Cells } from "./Techstack";

const tools = [
  { Icon: SiLinux, name: "Linux" },
  { Icon: SiApple, name: "macOS" },
  { Icon: SiVisualstudiocode, name: "VS Code" },
  { Icon: SiPostman, name: "Postman" },
  { Icon: DiTerminal, name: "Terminal" },
];

function Toolstack() {
  return <Cells items={tools} />;
}

export default Toolstack;
