import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import iset from "../../Assets/Projects/asset-it.jpg";
import workit from "../../Assets/Projects/workit.jpg";
import ers from "../../Assets/Projects/ers.jpg";
import emotion from "../../Assets/Projects/emotion.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">      
      <Container>
        <h1 className="project-heading">
          My Recent <strong>Works </strong>
        </h1>
        <p>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iset}
              isBlog={false}
              title="iSet"
              description="An IT Asset management to manage all IT Asset in my previous company. Made with Codeigniter"
              link="https://demo.zdienos.com/asset-it"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workit}
              isBlog={false}
              title="HelpIT"
              description="A web based application to manage request and work progress on IT Department. Made with Codeigniter"
              link="https://demo.zdienos.com/work-its"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ers}
              isBlog={false}
              title="Employee Rating System"
              description="A Decision Making System to asses employee performance. Made with Codeigniter"
              link="#"
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
