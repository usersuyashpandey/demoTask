import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/Contact/ContactForm";
import ContactList from "./components/Contact/ContactList";
import { addContact, editContact } from "./actions";
import { Link} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const ContactApp = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const [selectedContact, setSelectedContact] = React.useState(null);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleEditContact = (contact) => {
    dispatch(editContact(contact));
    setSelectedContact(null);
  };

  return (
    <Container>
      <Link to={"/"} style={{ color: "blue", textDecoration: "none" }}>
        Back to home page
      </Link>
      <h1 className="text-center">Contact App</h1>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <ContactList
            contacts={contacts}
            onEditClick={(contact) => setSelectedContact(contact)}
          />
        </Col>
        <Col md={6}>
          <ContactForm
            onSubmit={selectedContact ? handleEditContact : handleAddContact}
            contact={selectedContact}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactApp;
