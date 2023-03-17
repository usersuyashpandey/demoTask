import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import { deleteContact, editContact } from "../../actions";
import { useLocation } from "react-router-dom";
import { Container, Form, FormControl, Button } from "react-bootstrap";

const ContactList = ({ location = { pathname: "" } }) => {
  const currentPath = location.pathname;
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const [editingContact, setEditingContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id, contact) => {
    setEditingContact(contact);
  };

  const handleSubmit = (contact) => {
    dispatch(editContact(editingContact.id, contact));
    setEditingContact(null);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container style={{marginTop:'2rem'}}>
      <Form>
      <FormControl
        type="text"
        placeholder="Search contacts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{width:'20rem'}}
      />
    </Form>
      {editingContact ? (
        <ContactForm onSubmit={handleSubmit} contact={editingContact} />
      ) : (
        filteredContacts.map((contact) => (
          <div key={contact.id}>
            <Contact contact={contact} />
            <Button onClick={() => handleEdit(contact.id, contact)} style={{marginRight:'12rem'}}>
              Edit
            </Button>
            <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
          </div>
        ))
      )}
    </Container>
  );
};

export default ContactList;
