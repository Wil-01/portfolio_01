import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCarousel from "./ProjectCarousel";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <ProjectCarousel />
    </Container>
  );
}

export default Projects;