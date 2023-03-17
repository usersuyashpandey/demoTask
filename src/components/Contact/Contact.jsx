import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = ({ contact }) => {
  return (
    <Container style={{margin:'1rem'}}>
      <Row>
        <Col>
          <p>Name: {contact.name}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Phone: {contact.phone}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Address: {contact.address}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Email: {contact.email}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
