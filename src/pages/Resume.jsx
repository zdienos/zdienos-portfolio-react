import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Section, { Lead } from "../components/Section";
import { RESUME_URL } from "../data/content";

// Must live in the same module that renders <Document>
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const pad = (n) => String(n).padStart(2, "0");

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
  const [page, setPage] = useState(1);

  return (
    <>
      <title>Mardino Santosa — CV</title>

      <Lead>
        Curriculum vitae — experience, education and skills on{" "}
        <span className="text-blue">{numPages ? `${pad(numPages)} pages` : "a few pages"}</span>.
      </Lead>

      <Section id="4.1" label="Document">
        <dl className="mb-6 border-t border-ink">
          {[
            ["File", "cv-en.pdf"],
            ["Language", "English"],
            ["Pages", numPages ? pad(numPages) : "—"],
          ].map(([term, value]) => (
            <div key={term} className="grid grid-cols-[7rem_1fr] border-b border-line py-2 md:grid-cols-[9rem_1fr]">
              <dt className="meta">{term}</dt>
              <dd className="font-mono text-xs leading-5">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-blue px-4 py-2 text-paper transition-opacity hover:opacity-85"
          >
            Download PDF ↓
          </a>
          {numPages > 1 && (
            <div className="meta flex items-center gap-4">
              <button
                type="button"
                onClick={() => setPage((p) => p - 1)}
                disabled={page <= 1}
                className="hover:text-blue disabled:opacity-30"
              >
                ← Prev
              </button>
              <span className="text-ink">
                p. {pad(page)} / {pad(numPages)}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => p + 1)}
                disabled={page >= numPages}
                className="hover:text-blue disabled:opacity-30"
              >
                Next →
              </button>
            </div>
          )}
        </div>

        <div ref={frame} className="relative border border-line bg-white">
          <Document
            file={RESUME_URL}
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
              setPage(1);
            }}
            loading={<p className="meta p-6">Loading PDF…</p>}
            error={<p className="meta p-6">Could not load the PDF.</p>}
          >
            {width > 0 && <Page pageNumber={page} width={width} />}
          </Document>
        </div>
      </Section>
    </>
  );
}

export default Resume;
