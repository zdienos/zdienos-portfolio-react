// A section of the sheet: a rotated running head in the margin, content beside it
function Plate({ id, no, title, children, className = "" }) {
  return (
    <section
      id={id}
      className={`border-b-2 border-ink px-4 py-14 md:grid md:grid-cols-[3.5rem_1fr] md:px-6 md:py-20 ${className}`}
    >
      <p className="label mb-8 flex items-center gap-3 md:sticky md:top-24 md:mb-0 md:flex-col md:items-start md:gap-4 md:self-start">
        <span className="text-magenta">{no}</span>
        <span className="md:rotate-180 md:[writing-mode:vertical-rl]">{title}</span>
      </p>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

// Big heading whose lines step to the right, Weingart-style
export function Stair({ lines, className = "" }) {
  return (
    <h2
      className={`text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.86] tracking-[-0.045em] ${className}`}
    >
      {lines.map((line, i) => (
        <span key={line} className="block" style={{ paddingLeft: `${i * 0.9}em` }}>
          {line}
        </span>
      ))}
    </h2>
  );
}

export default Plate;
