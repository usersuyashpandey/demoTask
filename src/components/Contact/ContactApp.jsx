// ContactApp.js

import React, { useState } from "react";
import ContactList from "./ContactList";
import { Link} from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const ContactApp = () => {

  return (
    <Container>
      <Link to={"/"} style={{ color: "blue", textDecoration: "none" }}>
        Back to home page
      </Link>
      <h1 className="text-center">Contact App</h1>
      <Row className="justify-content-md-center">
          <ContactList/>
      </Row>
    </Container>
  );
};

export default ContactApp;
