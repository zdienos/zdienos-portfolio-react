import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="s-footer">
      <div className="s-container s-grid">
        <p className="s-footer__big">
          Let's build
          <br />
          something<span className="s-accent">.</span>
        </p>
        <div className="s-footer__col">
          <span className="s-meta">Contact</span>
          <a href="https://t.me/zdienos" target="_blank" rel="noreferrer">
            Telegram ↗
          </a>
          <a
            href="https://www.linkedin.com/in/zdienos/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
        <div className="s-footer__col">
          <span className="s-meta">©&nbsp;{year}</span>
          <span>zdienos</span>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
