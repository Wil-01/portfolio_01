import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import pdf from "../../Assets/../Assets/williams.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A PROPOS <span className="">DE MOI  </span> 
            </h1>
            <p className="home-about-body">
              Je suis un développeur fullstack passionné, avec une solide expérience en backend
              <br />
              <br />Je maîtrise des technologies comme 
              <i>
                <b className=""> Python, Javascript et Php. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt sont la création &nbsp;
              <i>
                <b className="">d’applications web complètes, </b>l’optimisation 
                des performances{" "}
                <b className="">
                  et l'IA.
                </b>
              </i>
              <br />
              <br />
              Dès que possible, j’applique ma passion en développant des projets fullstack avec des technologies 
              <b className=""> modernes et en explorant de nouvelles approches pour améliorer l’expérience utilisateur.</b>
              
            </p>
            <div>
            <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger CV
          </Button>
          </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Trouver moi sur</h1>
            <p>
              Soyez libre de me  <span className="">contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Wil-01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/williams-kouton-godonou-82410b25b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
