// A numbered block on the content column: label on the left, body on the right
function Section({ id, label, children, className = "" }) {
  return (
    <section
      className={`grid grid-cols-4 gap-x-5 border-t border-ink px-5 pb-12 pt-3 lg:grid-cols-7 lg:gap-x-6 lg:px-8 lg:pb-16 ${className}`}
    >
      <header className="meta col-span-4 mb-6 flex gap-3 lg:col-span-2 lg:mb-0">
        <span className="text-blue">{id}</span>
        <span>{label}</span>
      </header>
      <div className="col-span-4 min-w-0 lg:col-span-5">{children}</div>
    </section>
  );
}

// The opening statement of each page, set large and light
export function Lead({ children }) {
  return (
    <div className="px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-24">
      <p className="max-w-[18em] text-[clamp(2rem,3.6vw,3.6rem)] font-light leading-[1.04] tracking-[-0.03em]">
        {children}
      </p>
    </div>
  );
}

// Column head row for the tabular lists
export function TableHead({ cols, className }) {
  return (
    <div className={`meta grid border-b border-ink pb-1 ${className}`}>
      {cols.map((c, i) => (
        <span key={c + i}>{c}</span>
      ))}
    </div>
  );
}

export default Section;
