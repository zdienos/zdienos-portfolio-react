import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/fotoME-min.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,  
  AiOutlineTwitter,  
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";

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
                  alt="Github"
                  aria-label="Check my Github"
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
                  aria-label="Tweet my X"
                  alt="Twitter"
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
                  aria-label="Find me on Linkedin"
                  alt="Linkedin"
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
                  aria-label="Watch my Videos"
                  alt="Youtube"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/+6285299977945/"
                  aria-label="WA me"
                  alt="Whatsapp"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/zdienos"
                  aria-label="Contact me on Telegram"
                  alt="Telegram"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegram />
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
