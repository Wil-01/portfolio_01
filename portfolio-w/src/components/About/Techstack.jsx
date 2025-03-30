import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaC } from "react-icons/fa6";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { motion } from "framer-motion";

const techItems = [
  { icon: <FaC />, name: "C" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" }
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techItems.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <motion.div
            className="tech-icon-container"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="tech-icon">
              {tech.icon}
            </div>
            <motion.div
              className="tech-name"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {tech.name}
            </motion.div>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;