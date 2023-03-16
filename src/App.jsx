import React from "react";
import { useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { addContact, editContact } from "./actions";
import { Link, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm onSubmit={handleAddContact} />
      <ContactList />
      <Link to={'/register'}>View Registration Form</Link>
    </div>
  );
};

export default App;
