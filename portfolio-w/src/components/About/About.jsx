import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import GitHub from "./Github";

import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/abouts.png";
import Toolstack from "./Toolstack";
import RolesBadges from "./RolesBadges"; 

function About() {
  return (
    <Container fluid className="about-section">
      <Particle style={{ zIndex: 0 }} />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", position: 'relative' }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          
          <Col md={5} style={{ paddingTop: "120px" }} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
            <RolesBadges />
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        
        <GitHub />
      </Container>
    </Container>
  );
}

export default About;
