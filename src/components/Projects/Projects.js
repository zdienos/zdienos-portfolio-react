import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCards";

import iset from "../../Assets/Projects/asset-it.jpg";
import workit from "../../Assets/Projects/workit.jpg";
import ers from "../../Assets/Projects/ers.jpg";
import vouchergen from "../../Assets/Projects/vouchergen.jpg";
import mockupexport from "../../Assets/Projects/mockup-export.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h2 className="project-heading">
          My Recent <strong>Works </strong>
        </h2>
        <p>Here are a few projects I've been worked on.</p>
        <Tabs
          defaultActiveKey="webapp"
          id="uncontrolled-tab-example"
          style={{ justifyContent: "center", paddingTop: "20px" }}
          variant="pills"
        >          
          <Tab eventKey="webapp" title="WebApp">
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
          </Tab>
          <Tab eventKey="deskapp" title="DesktopApp">
             <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={vouchergen}
                  isBlog={true}
                  title="VoucherGen"
                  description="It use to automatically generate username and password of Mikrotik Username, that use for Hotspot Management MikroTik Router. Created with VisualBasic"
                  link="https://blog.zdienos.com/2013/02/voucher-generator-for-mikrotik-full-version.html"
                />
              </Col>

              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={mockupexport}
                  isBlog={false}
                  title="MockupExport"
                  description="Photoshop script based to export multiple result based on Mockup Design, eg CardName with different style."
                  link="#"
                />
              </Col>              
            </Row>
          </Tab>          
        </Tabs>                     
      </Container>
    </Container>
  );
}

export default Projects;
