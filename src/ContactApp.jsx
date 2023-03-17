import React from "react";
import { useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { addContact, editContact } from "./actions";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const ContactApp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  return (
    <Container>
      <Link to={'/'} style={{color:'blue',textDecoration:'none'}}>Back to home page</Link>
      <h1 className="text-center">Contact App</h1>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <ContactForm onSubmit={handleAddContact} />
        </Col>
        <Col md={6}>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactApp;
