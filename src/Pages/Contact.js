import React from "react";
import "../css/styles.css";
import { Button, Form } from "react-bootstrap";

function Contact() {
  return (

    <div className="page">
      <h1 className="mb-4">Contact Us</h1>
      <p><strong>Phone:</strong> (123) 456-7890</p>
      <p><strong>Email:</strong> info@tastytreats.com</p>
      <p><strong>Address:</strong>Address: 123 Flavor Street, Food City, Yumland</p>

      <Form className="contact-form">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="fw-bold">Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="fw-bold">Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label className="fw-bold">Your Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Type your message" required />
        </Form.Group>

        <Button variant="dark" type="submit">Send Message</Button>
      </Form>   

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5093875631683!2d-79.38393408450537!3d43.65322607912185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2d1b18ed7%3A0x2d13fa07a9c17f2b!2sToronto!5e0!3m2!1sen!2sca!4v1680998414002!5m2!1sen!2sca"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;