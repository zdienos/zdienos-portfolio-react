import React from "react";
import myImg from "../../Assets/fotoME-min.jpg";
import Section from "../Section";

const socials = [
  { name: "GitHub", handle: "zdienos", href: "https://github.com/zdienos" },
  { name: "X / Twitter", handle: "@zdienos", href: "https://twitter.com/zdienos" },
  { name: "LinkedIn", handle: "in/zdienos", href: "https://www.linkedin.com/in/zdienos/" },
  { name: "YouTube", handle: "/zdienos", href: "https://www.youtube.com/zdienos/" },
  { name: "WhatsApp", handle: "+62 852 9997 7945", href: "https://wa.me/+6285299977945/" },
  { name: "Telegram", handle: "t.me/zdienos", href: "https://t.me/zdienos" },
];

function HomeSecond() {
  return (
    <>
      <Section num="01" label="Introduction">
        <div className="s-split">
          <div>
            <p className="s-lead">
              A hard-working <strong>IT Administrator</strong>, skilled at
              managing networking, maintaining security systems and databases.
            </p>
            <p className="s-body">
              Effective communicator with great technological expertise and deep
              passion for technology. Also a <strong>Full Stack Developer</strong>{" "}
              with 5+ years of hands-on experience in developing scalable
              websites and applications using a wide range of front/back-end
              skills like HTML, CSS, JavaScript, jQuery and PHP, CodeIgniter,
              Laravel — I think… 🤷‍♂️
            </p>
          </div>
          <figure className="s-portrait">
            <img src={myImg} alt="Mardino Santosa" />
            <figcaption className="s-meta">Fig. 1 — Mardino Santosa</figcaption>
          </figure>
        </div>
      </Section>

      <Section num="02" label="Find me on" title="Feel free to connect.">
        <ul className="s-index">
          {socials.map(({ name, handle, href }) => (
            <li key={name}>
              <a href={href} target="_blank" rel="noreferrer">
                <span className="s-index__name">{name}</span>
                <span className="s-index__meta">{handle}</span>
                <span className="s-index__arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
export default HomeSecond;
