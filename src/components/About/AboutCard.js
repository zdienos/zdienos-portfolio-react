import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there!. I am <strong>Mardino Santosa </strong> from <span className="purple"> Makassar, Indonesia.</span>
            <br />I want to say that I am Network and System Administrator, Full Stack Developer, Hardware Maintainer.
            Graduated from Bachelor of Physics, but have the ability of Electronics, especially MicroController, and selft-taught computer knowledge.
            <br />
            <br />            
          </p>          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
