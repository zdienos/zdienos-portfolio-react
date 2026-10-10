import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "/cv-en.pdf";

const pagerButton =
  "border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-black hover:text-signal disabled:pointer-events-none disabled:opacity-30";

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className="grid grid-cols-12 gap-[2px] border-b-2 border-ink bg-ink">
      <aside className="relative col-span-12 overflow-hidden bg-signal p-4 text-black md:col-span-4">
        <div className="md:sticky md:top-20">
          <p className="text-xs font-bold uppercase tracking-widest">
            Curriculum vitae
          </p>
          <h1 className="mt-10 text-[34vw] font-black uppercase leading-[0.78] tracking-tight font-condensed md:text-[13vw]">
            CV
          </h1>
          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex items-center justify-between bg-black px-4 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
          >
            Download CV
            <span aria-hidden="true">↓</span>
          </a>

          {numPages && (
            <div className="mt-6 flex items-center justify-between gap-2">
              <button
                type="button"
                className={pagerButton}
                disabled={pageNumber <= 1}
                onClick={() => changePage(-1)}
              >
                ← Prev
              </button>
              <span className="text-sm font-black font-condensed">
                {String(pageNumber).padStart(2, "0")} / {String(numPages).padStart(2, "0")}
              </span>
              <button
                type="button"
                className={pagerButton}
                disabled={pageNumber >= numPages}
                onClick={() => changePage(1)}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </aside>

      <div className="col-span-12 flex justify-center overflow-x-auto bg-paper p-4 md:col-span-8 md:p-10">
        <Document
          file={resumeLink}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <p className="text-xs font-bold uppercase tracking-widest">
              Loading PDF…
            </p>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={width > 786 ? 1.3 : 0.6}
            renderTextLayer={false}
            className="border-2 border-ink"
          />
        </Document>
      </div>
    </section>
  );
}

export default Resume;
