import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProjectCard from "./ProjectCards";

// import newdata from "../../Datas/data.json";
//const projects = newdata.projects;

function Projects() {
  const [projects, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {        
        return response.json();
      })
      .then(function (myJson) {        
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

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
          {projects.projects &&
            projects.projects.map(({ key, title, data }) => (
              <Tab key={key} eventKey={key} title={title}>
                <Row
                  style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                  {data &&
                    data.map(
                      ({ id, imgpath, isblog, title, description, link }) => (
                        <Col xs={12} md={6} lg={4} className="project-card" key={id}>
                          <ProjectCard
                            imgPath={imgpath}
                            isBlog={isblog}
                            title={title}
                            description={description}
                            link={link}
                          />
                        </Col>
                      )
                    )}
                </Row>
              </Tab>
            ))}
        </Tabs>
      </Container>
    </Container>
  );
}

export default Projects;
