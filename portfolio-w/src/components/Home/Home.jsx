import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/ams.jpeg";
import ParticlesBackground from "../Particle";
import { useTheme } from '../ThemeContext';


import Home2 from "./Home2";
import Type from "./Type";

function Home() {

  const { darkMode } = useTheme();
  return (
    <section>
      <Container fluid className="home-section  {`my-component ${darkMode ? 'dark' : 'light'}`}" id="home">
        <ParticlesBackground />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bonjour!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Je suis
                <strong className=""> Williams KOUTON</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", fontSize: "2.5em", fontWeight: 600 }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
