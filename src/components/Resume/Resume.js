import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/cv-en.pdf";
import { AiOutlineDownload,  AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resumeLink from '../../Assets/cv-en.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink = "https://raw.githubusercontent.com/zdienos/zdienos/main/cv-en.pdf";  


function Resume() {
  const [width, setWidth] = useState(1200);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);    
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {/* <Document file={resumeLink}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document> */}
         
         <Document
            file={resumeLink}
            onLoadSuccess={onDocumentLoadSuccess}
            onClick={changePage}
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>          
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", top:-170}}>
        <Button variant="primary" type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
           <AiFillCaretLeft />
        </Button>
        &nbsp;
        <Button variant="primary" 
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          <AiFillCaretRight />
          
        </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
