// Printer's crop marks around a figure
const corners = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

function CropMarks() {
  return corners.map((pos) => (
    <span
      key={pos}
      aria-hidden="true"
      className={`pointer-events-none absolute h-3 w-3 border-blue ${pos}`}
    />
  ));
}

export default CropMarks;
