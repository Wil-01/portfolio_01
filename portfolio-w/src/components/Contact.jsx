import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import Particle from './Particle';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs.sendForm(
      'service_6o252wr', // Remplacez par votre Service ID
      'template_nid9nka', // Remplacez par votre Template ID
      form.current,
      'PCeU95ahKyzH6P_Uc' // Remplacez par votre User ID
    )
    .then((result) => {
      setSuccess(true);
      form.current.reset();
    }, (error) => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row>
          <Col md={6} className="contact-form">
            <h1 className="contact-title">Contactez-<span className="purple">moi</span></h1>
            
            {success && (
              <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
                Message envoyé avec succès!
              </Alert>
            )}
            
            {error && (
              <Alert variant="danger" onClose={() => setError(false)} dismissible>
                Une erreur s'est produite. Veuillez réessayer.
              </Alert>
            )}

            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control 
                  type="text" 
                  name="user_name" 
                  required 
                  placeholder="Entrez votre nom" 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                  type="email"
                  name="user_email"
                  required
                  placeholder="Entrez votre email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control
                  as="textarea"
                  name="message"
                  required
                  rows={5}
                  placeholder="Votre message ici..."
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                disabled={loading}
              >
                {loading ? 'Envoi en cours...' : 'Envoyer'}
              </Button>
            </Form>
          </Col>

          <Col md={6} className="contact-info">
            <h2>Coordonnées</h2>
            <p>
              <i className="fas fa-envelope"></i> contact@williams-kouton.com
            </p>
            <p>
              <i className="fas fa-phone"></i> +33 6 12 34 56 78
            </p>
            {/* Ajoutez d'autres informations de contact si nécessaire */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;