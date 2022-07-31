import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/fotoME-min.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,  
} from "react-icons/ai";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";

function HomeSecond() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "1.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h2>
            <p className="home-about-body">
            A hard-working <b>IT Administrator</b>, skilled at managing networking, maintaining security systems and databases. Effective communicator with great technological expertise and deep passion for
            technology.
            <br />
            <br />
            Also a <b>Full Stack Developer</b> with 5+ years of hands-on experience in developing scalable website/
            applications using a wide range of front/back-end skills like HTML/ CSS/ JavaScript/ JQuery and PHP/ CodeIgniter/ Laravel, I think… 🤷‍♂️            
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-avatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12} className="home-about-social">
          <h2 style={{ fontSize: "1.6em" }}>FIND ME ON</h2>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/zdienos"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/zdienos"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zdienos/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/zdienos/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeSecond;
