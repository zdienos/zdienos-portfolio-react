import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import {
  AiOutlineDownload,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "/cv-en.pdf";

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showButton, setShowButton] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
    setShowButton(true);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    setShowButton(false);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={resumeLink} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={resumeLink}
            onLoadSuccess={onDocumentLoadSuccess}
            onClick={changePage}
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative", top: -170 }}
        >
          <div style={{ display: showButton ? "block" : "none" }}>
            <Button
              variant="primary"
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              <AiFillCaretLeft />
            </Button>
            &nbsp;
            <Button
              variant="primary"
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              <AiFillCaretRight />
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
