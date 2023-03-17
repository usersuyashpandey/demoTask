import React from "react";
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
import * as y from "yup";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const schema = y.object({
  name: y.string().required("Please enter your name"),
  phone: y.string()
    .required("Phone no. is required")
    .matches(/^[\d\+ \-\(\)]+$/, "Please enter a valid phone number"),
  address: y.string().required("Please enter your address"),
  email: y.string().email("Please enter a valid email address").required("Please enter your email"),
});

const ContactForm = ({ onSubmit, contact }) => {
  console.log(contact,'contact')
  let selectedContact = {name:contact?.name,email:contact?.email,phone:contact?.phone,address:contact?.address} 
  console.log(selectedContact,'llkk')
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: selectedContact,
  });

  const onSubmitForm = (data) => {
    console.log(data,'llop')
    onSubmit(data);
    reset();
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" {...register("name")} placeholder="Enter name" />
              {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" {...register("email")} placeholder="Enter email" />
              {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Phone No.</Form.Label>
              <Form.Control type="text" {...register("phone")} placeholder="Enter phone number" />
              {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" {...register("address")} placeholder="Enter address" />
              {errors.address && <p style={{ color: 'red' }}>{errors.address.message}</p>}
            </Form.Group>
            <Button type="submit">{contact ? "Update" : "Add"}</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default ContactForm
