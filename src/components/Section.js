import React from "react";

function Section({ num, label, title, children, className = "" }) {
  return (
    <section className={`s-section ${className}`}>
      <div className="s-container s-grid">
        <header className="s-section__label">
          <span className="s-num">{num}</span>
          <span>{label}</span>
        </header>
        <div className="s-section__body">
          {title && <h2 className="s-h2">{title}</h2>}
          {children}
        </div>
      </div>
    </section>
  );
}

export default Section;
