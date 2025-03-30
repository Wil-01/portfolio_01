import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiSlack, SiVercel, SiMacos } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { motion } from "framer-motion";

const toolItems = [
  { icon: <SiMacos />, name: "macOS" },
  { icon: <DiVisualstudio />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <SiVercel />, name: "Vercel" }
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolItems.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <motion.div
            className="tech-icon-container"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="tech-icon">
              {tool.icon}
            </div>
            <motion.div
              className="tech-name"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {tool.name}
            </motion.div>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;