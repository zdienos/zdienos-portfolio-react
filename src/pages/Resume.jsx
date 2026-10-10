import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { RESUME_URL } from "../data/content";

// Must live in the same module that renders <Document>
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function useWidth(ref) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) =>
      setWidth(Math.floor(entry.contentRect.width))
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return width;
}

function Resume() {
  const frame = useRef(null);
  const width = useWidth(frame);
  const [numPages, setNumPages] = useState(0);

  return (
    <>
      <title>Mardino Santosa — CV</title>
      <section className="relative overflow-hidden border-b-2 border-ink px-4 py-12 md:px-6 md:py-16">
        <span
          aria-hidden="true"
          className="overprint absolute -right-10 -top-16 h-64 w-64 rounded-full bg-magenta md:h-96 md:w-96"
        />
        <p className="label relative">
          <Link to="/" className="hover:text-magenta">← Back to the sheet</Link>
        </p>
        <h1 className="relative mt-10 text-[clamp(3.5rem,12vw,11rem)] font-black leading-[0.82] tracking-[-0.055em]">
          The CV,
          <span className="block pl-[1em] font-normal italic">on paper.</span>
        </h1>
        <div className="relative mt-10 flex flex-wrap items-center gap-6">
          <a
            href={RESUME_URL}
            download
            className="label border-2 border-ink bg-ink px-4 py-3 text-paper transition-colors hover:border-magenta hover:bg-magenta"
          >
            Download PDF ↓
          </a>
          <p className="label text-soft">
            English · {numPages ? `${numPages} pages` : "loading…"} · cv-en.pdf
          </p>
        </div>
      </section>

      <section className="bg-ink/5 px-4 py-10 md:px-6 md:py-14">
        <div ref={frame} className="mx-auto max-w-4xl space-y-6">
          <Document
            file={RESUME_URL}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<p className="label text-soft">Loading the PDF…</p>}
            error={<p className="label text-soft">The PDF could not be loaded.</p>}
          >
            {width > 0 &&
              Array.from({ length: numPages }, (_, i) => (
                <div key={i} className="mb-6 border-2 border-ink bg-white last:mb-0">
                  <Page pageNumber={i + 1} width={width - 4} />
                </div>
              ))}
          </Document>
        </div>
      </section>
    </>
  );
}

export default Resume;
