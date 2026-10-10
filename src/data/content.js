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
  DiTerminal,
} from "react-icons/di";
import {
  SiKubernetes,
  SiLinux,
  SiApple,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const PROJECTS_URL = "https://api.npoint.io/b5c3511ff95746384e06";
export const WAKATIME_URL =
  "https://wakatime.com/share/@zdienos/618218b9-cc3f-4100-bcf5-5f1e6c0a76d6.json"; // last 7 days
export const RESUME_URL = "/cv-en.pdf";
export const BLOG_URL = "https://blog.zdienos.com/";

export const pages = [
  { to: "/", label: "Index", title: "Index" },
  { to: "/about", label: "About", title: "About" },
  { to: "/project", label: "Works", title: "Works" },
  { to: "/resume", label: "Curriculum vitae", title: "CV" },
];

export const roles = [
  "Full 'Snack' Developer",
  "Network / System Administrator",
  "Open Source Contributor??",
];

export const socials = [
  { name: "GitHub", handle: "github.com/zdienos", href: "https://github.com/zdienos" },
  { name: "Twitter", handle: "@zdienos", href: "https://twitter.com/zdienos" },
  { name: "LinkedIn", handle: "in/zdienos", href: "https://www.linkedin.com/in/zdienos/" },
  { name: "YouTube", handle: "youtube.com/zdienos", href: "https://www.youtube.com/zdienos/" },
  { name: "WhatsApp", handle: "+62 852 9997 7945", href: "https://wa.me/+6285299977945/" },
  { name: "Telegram", handle: "t.me/zdienos", href: "https://t.me/zdienos" },
];

export const facts = [
  ["Name", "Mardino Santosa"],
  ["Alias", "zdienos"],
  ["Based in", "Makassar, Indonesia"],
  ["Education", "Bachelor of Physics"],
  ["Roles", "Network & System Administrator, Full Stack Developer, Hardware Maintainer"],
  ["Interests", "Electronics, especially microcontrollers"],
];

export const stackColumns = ["Front-end", "Back-end", "Database", "Infra", "Tooling"];

export const stack = [
  { Icon: DiHtml5, name: "HTML5", in: ["Front-end"] },
  { Icon: DiCss3, name: "CSS3", in: ["Front-end"] },
  { Icon: DiJavascript1, name: "JavaScript", in: ["Front-end", "Back-end"] },
  { Icon: DiReact, name: "React", in: ["Front-end"] },
  { Icon: DiNodejs, name: "Node.js", in: ["Back-end"] },
  { Icon: DiCodeigniter, name: "CodeIgniter", in: ["Back-end"] },
  { Icon: DiLaravel, name: "Laravel", in: ["Back-end"] },
  { Icon: DiMysql, name: "MySQL", in: ["Database"] },
  { Icon: DiDocker, name: "Docker", in: ["Infra"] },
  { Icon: SiKubernetes, name: "Kubernetes", in: ["Infra"] },
  { Icon: DiGit, name: "Git", in: ["Tooling"] },
];

export const tools = [
  { Icon: SiLinux, name: "Linux" },
  { Icon: SiApple, name: "macOS" },
  { Icon: VscVscode, name: "VS Code" },
  { Icon: SiPostman, name: "Postman" },
  { Icon: DiTerminal, name: "Terminal" },
];
