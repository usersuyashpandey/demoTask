import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact, editContact } from "../../actions";
import { Container, Form, FormControl, Button, Card, Badge, Stack, Col, Row } from "react-bootstrap";
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
  const [captureContact,setCaptureContact] = useState()

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id,contact) => {
    setEditingContact({ id, contact });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container style={{marginTop:'2rem'}}>
      <Row>
      <Col md={6}>
      <Form>
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
            <Stack direction="horizontal" gap={5}>
              <div>
                <Badge pill  className="mr-2">
                  {contact.id}
                </Badge>
                <PersonIcon className="mr-2" />
                <strong>{contact.name}</strong>
                <div className="ml-2">{contact.phone}</div>
              </div>
              <div>
                <Button variant="light">
                  <VisibilityIcon />
                </Button>
                <Button variant="warning" onClick={() => handleEdit(contact.id,contact)}>
                  <EditIcon />
                </Button>
                <Button variant="danger" onClick={() => handleDelete(contact.id)}>
                  <DeleteIcon />
                </Button>
              </div>
              </Stack>
            </Card.Body>
          </Card>
          </div>
        ))}
        </Col>
        {editingContact?
        (<Col md={6}><ContactForm editingContact={editingContact.contact}editingContactId={editingContact.id}/></Col>)
        :(<Col md={6}><ContactForm/></Col>)
        
      }
      </Row>
    </Container>
  );
};

export default ContactList;
