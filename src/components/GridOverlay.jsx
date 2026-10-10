function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 grid grid-cols-4 gap-x-5 px-5 lg:grid-cols-12 lg:gap-x-6 lg:px-8"
    >
      {Array.from({ length: 12 }, (_, i) => (
        <span
          key={i}
          className={`border-x border-blue/30 bg-blue/[0.06] ${i >= 4 ? "hidden lg:block" : ""}`}
        />
      ))}
    </div>
  );
}

export default GridOverlay;
