import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeSecond from "./HomeSecond";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">        
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 className="heading-name">
                I am
                <strong className="main-name"> Mardino Santosa</strong>
              </h1>
              <div style={{ height:130, padding: 10, textAlign: "center" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeSecond />
    </section>
  );
}

export default Home;
