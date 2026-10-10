import React from "react";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Wakatime from "./Wakatime";
import { PageHead, SectionHead } from "../Heads";

function About() {
  return (
    <>
      <PageHead kicker="About — Who am I?" title="About" />

      <Aboutcard />

      <SectionHead num="02" label="Stacks I know" title="Stack" />
      <Techstack />

      <SectionHead num="03" label="Tools I use" title="Tools" />
      <Toolstack />

      <Github />

      <SectionHead num="05" label="Languages I use" title="Languages" />
      <Wakatime />
    </>
  );
}

export default About;
