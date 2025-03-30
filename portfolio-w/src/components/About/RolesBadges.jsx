import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../RolesBadges.css";

const RolesBadges = () => {
  const roles = [
    { title: "Frontend", subtitle: "Developer" },
    { title: "React.js", subtitle: "Developer" },
    { title: "Backend", subtitle: "Developer" },
    { title: "Full Stack", subtitle: "Developer" }
  ];

  return (
    <Row className="roles-container">
      {roles.map((role, index) => (
        <Col key={index} xs={6} md={3} className="role-badge">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="badge-content"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{role.title}</h3>
            <p>{role.subtitle}</p>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default RolesBadges;