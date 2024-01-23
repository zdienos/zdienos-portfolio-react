import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProjectCard from "./ProjectCards";
// import Preloader from "../Pre";

const npointURL = "https://api.npoint.io/b5c3511ff95746384e06";

function Projects() {
  const [projects, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const headers = {
    'Access-Control-Allow-Origin': '*'    
  }

  const getData = async () => {
    const result = await axios(npointURL, {
      headers: headers
    });
    setData(result.data);
    setLoading(false);
  };

  // useEffect(() => {
    getData();
  // }, [])


  return (
    <Container fluid className="project-section">
      <Container>
        <h2 className="project-heading">
          My Recent <strong>Works </strong>
        </h2>
        <p>Here are a few projects I've been worked on.</p>
        {isLoading && <div id={"spin-loader"} />}
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
                        <Col
                          xs={12}
                          md={6}
                          lg={4}
                          className="project-card"
                          key={id}
                        >
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
