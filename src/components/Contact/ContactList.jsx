import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact, editContact } from "../../actions";
import { Container, Form, FormControl, Button, Card, Badge, Col, Row, Stack } from "react-bootstrap";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import ContactForm from "./ContactForm";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const [editingContact, setEditingContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedContactId, setExpandedContactId] = useState()
  
  

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id, updatedContact) => {
    dispatch(editContact(id, updatedContact));
    setEditingContact(updatedContact)
  };
  
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const visibilityClick = (id) => {
    setExpandedContactId((prevExpandedContactId) =>
      prevExpandedContactId === id ? null : id
    );
  };

  return (
    <Container style={{marginTop:'2rem'}} fluid>
      <Row>
      <Col md={6}>
      <Form className="mb-3">
        <FormControl
          type="text"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{width:'20rem'}}
        />
      </Form>
      {filteredContacts.map((contact) => (
          <div key={contact.id} >
            <Card className="mb-2">
            <Card.Body className="d-flex align-items-between">
                <div style={{marginRight:'1rem'}}>
                  {contact.id}
                </div>
                <PersonIcon style={{marginRight:'1rem'}}/>
                <Stack gap={1} className="col-md-5 mx-auto">
                <strong>{contact.name}</strong>
                <div >{contact.phone}</div>
                {
                  expandedContactId === contact.id && (
                    <>
                      <div>{contact.email}</div>
                      <div>{contact.address}</div>
                    </>
                  )
                }
                </Stack>
                <Button variant="light" style={{marginRight:'1rem'}} size="sm" onClick={()=>visibilityClick(contact.id)}>
                  <VisibilityIcon />
                </Button>
                <Button size="sm" variant="warning" style={{marginRight:'1rem'}} onClick={() => handleEdit(contact.id,contact)}>
                  <EditIcon />
                </Button>
                <Button size="sm" variant="danger" style={{marginRight:'1rem'}} onClick={() => handleDelete(contact.id)}>
                  <DeleteIcon />
                </Button>
              
            </Card.Body>
          </Card>
          </div>
        ))}
        </Col>
        <Col md={6}><ContactForm editingContact={editingContact}/></Col>
      </Row>
    </Container>
  );
};

export default ContactList;
