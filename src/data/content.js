export const PROJECTS_URL = "https://api.npoint.io/b5c3511ff95746384e06";
export const WAKATIME_URL =
  "https://wakatime.com/share/@zdienos/618218b9-cc3f-4100-bcf5-5f1e6c0a76d6.json"; // last 7 days
export const RESUME_URL = "/cv-en.pdf";
export const BLOG_URL = "https://blog.zdienos.com/";
export const EMAIL = "mardinosantosa@gmail.com";

// Sections of the one-page sheet; old routes map onto them
export const sections = [
  { id: "years", label: "Years" },
  { id: "work", label: "Work" },
  { id: "wins", label: "Wins" },
  { id: "kit", label: "Kit" },
  { id: "pulse", label: "Pulse" },
  { id: "contact", label: "Contact" },
];

export const routeToSection = {
  "/about": "years",
  "/project": "work",
};

export const FIRST_YEAR = 2007;
export const LAST_YEAR = 2022;

// From cv-en.pdf
export const experience = [
  {
    from: 2007,
    to: 2008,
    org: "AMIK Professional College",
    role: "Instructor",
    note: "Taught office software and the basics of Visual, Delphi and web programming.",
  },
  {
    from: 2008,
    to: 2009,
    org: "STMIK Dipanegara",
    role: "Lecturer",
    note: "Lectured on network security, web programming, Delphi and Linux as a network OS.",
  },
  {
    from: 2009,
    to: 2019,
    org: "Transstudio Themepark Makassar",
    role: "System & Hardware Administrator",
    note: "Ten years running the park's networks, security systems, SQL Server and every Windows and Mac on site — plus the internal apps the team relied on.",
  },
  {
    from: 2015,
    to: 2015,
    org: "Bappeda Kabupaten Mamuju",
    role: "IT Consultant",
    note: "Installed and managed the network on MikroTik, and trained staff on Google Apps for Work.",
  },
  {
    from: 2019,
    to: 2022,
    org: "Kumalagroup",
    role: "Administrator & Full Stack Developer",
    note: "Hyper-V, Windows Server 2019 and Linux in the back room; LAMP and Node.js environments for the dev team; internal web apps on CodeIgniter, Laravel and MariaDB.",
  },
];

export const education = [
  { from: 2002, to: 2007, org: "Universitas Hasanuddin, Makassar", what: "Bachelor of Physics" },
  { from: 1997, to: 2000, org: "SMA Negeri 01 Makassar", what: "Natural Science" },
];

export const wins = [
  {
    place: "1st",
    year: 2013,
    title: "Mini Kontes MikroTik RouterOS",
    by: "edukasi.co.id",
    href: "https://blog.zdienos.com/2013/02/alhamdulillah-menang-mini-kontes.html",
  },
  {
    place: "4th",
    year: 2007,
    title: "Microsoft Office 2007 Competition",
    by: "Tabloid Komputer PC Media",
    href: "https://bit.ly/PCMediaOffice2007",
  },
];

// Small things built along the way, not in the project feed
export const sideProjects = [
  { name: "Attendance software", where: "Chambers Distro Outlet, 2010", tech: "Visual FoxPro" },
  { name: "Performer Utilization Score", where: "Transstudio Themepark", tech: "Scores show cast talent" },
  { name: "TelePrompter", where: "Transstudio Themepark", tech: "Text for news readers" },
  { name: "Telegram deploy bot", where: "For developers", tech: "Pulls repos to branches and servers" },
  { name: "Telegram MikroTik bot", where: "For PPPoE users", tech: "Checks and changes IP addresses" },
];

export const websites = [
  "zdienos.com",
  "blog.zdienos.com",
  "kallagroup.co.id",
  "ib3l.com",
  "creosis.com",
  "slemmersindo.com",
  "pemkabsidrap.com",
  "pispsulsel.com",
  "smansa86makassar.org",
  "e-dinarcoin.id",
  "gudangupil.com",
  "aplikasindo.com",
];

export const kit = [
  { group: "Servers", items: ["Linux", "Windows Server 2019", "Hyper-V", "Bash"] },
  { group: "Hosting", items: ["LAMP", "CentOS Web Panel", "aaPanel", "Docker"] },
  { group: "Network", items: ["MikroTik", "Cisco"] },
  { group: "Web", items: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "CodeIgniter", "Laravel", "Node.js", "REST APIs"] },
  { group: "Data", items: ["MariaDB", "MySQL", "SQL Server"] },
  { group: "Flow", items: ["Git Flow", "Automation"] },
];

export const contacts = [
  { name: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { name: "WhatsApp", value: "+62 852 9997 7945", href: "https://wa.me/+6285299977945/" },
  { name: "Telegram", value: "t.me/zdienos", href: "https://t.me/zdienos" },
  { name: "GitHub", value: "zdienos", href: "https://github.com/zdienos" },
  { name: "LinkedIn", value: "in/zdienos", href: "https://www.linkedin.com/in/zdienos/" },
  { name: "Twitter", value: "@zdienos", href: "https://twitter.com/zdienos" },
  { name: "YouTube", value: "/zdienos", href: "https://www.youtube.com/zdienos/" },
  { name: "Blog", value: "blog.zdienos.com", href: BLOG_URL },
];
