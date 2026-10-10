import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "/cv-en.pdf";

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
    <>
      <section className="s-page-head">
        <div className="s-container s-grid">
          <span className="s-meta s-page-head__meta">Curriculum vitae</span>
          <h1 className="s-display s-display--md">
            Resume<span className="s-accent">.</span>
          </h1>
          <div className="s-page-head__lead">
            <a className="s-button" href={resumeLink} target="_blank" rel="noreferrer">
              Download CV ↓
            </a>
          </div>
        </div>
      </section>

      <section className="s-section">
        <div className="s-container">
          <div className="s-resume">
            <Document
              file={resumeLink}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<p className="s-meta">Loading PDF…</p>}
            >
              <Page pageNumber={pageNumber} scale={width > 786 ? 1.3 : 0.6} />
            </Document>
          </div>

          {numPages && (
            <div className="s-pager">
              <button
                type="button"
                className="s-button s-button--ghost"
                disabled={pageNumber <= 1}
                onClick={() => changePage(-1)}
              >
                ← Prev
              </button>
              <span className="s-meta">
                Page {String(pageNumber).padStart(2, "0")} / {String(numPages).padStart(2, "0")}
              </span>
              <button
                type="button"
                className="s-button s-button--ghost"
                disabled={pageNumber >= numPages}
                onClick={() => changePage(1)}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Resume;
