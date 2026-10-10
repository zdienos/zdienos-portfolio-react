import React from "react";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Wakatime from "./Wakatime";
import Section from "../Section";

function About() {
  return (
    <>
      <section className="s-page-head">
        <div className="s-container s-grid">
          <span className="s-meta s-page-head__meta">About</span>
          <h1 className="s-display s-display--md">
            Who am I<span className="s-accent">?</span>
          </h1>
        </div>
      </section>

      <Section num="01" label="Profile">
        <Aboutcard />
      </Section>

      <Section num="02" label="Stack" title="Stacks I know.">
        <Techstack />
      </Section>

      <Section num="03" label="Tools" title="Tools I use.">
        <Toolstack />
      </Section>

      <Section num="04" label="Activity" title="Days I code.">
        <Github />
      </Section>

      <Section num="05" label="Languages" title="Languages I use.">
        <Wakatime />
      </Section>
    </>
  );
}

export default About;
