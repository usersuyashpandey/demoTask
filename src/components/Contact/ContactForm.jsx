import React, { useEffect, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as y from "yup";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { addContact, editContact } from "../../actions";
import { useDispatch } from "react-redux";

const schema = y.object({
  name: y.string().required("Please enter your name"),
  phone: y.string()
    .required("Phone no. is required")
    .matches(/^[\d+ \-()]+$/, "Please enter a valid phone number"),
  address: y.string().required("Please enter your address"),
  email: y.string().email("Please enter a valid email address").required("Please enter your email"),
});

const ContactForm = ({ editingContact }) => {
  const defaultValues = {
    name: editingContact?.name || '',
    email: editingContact?.email || '',
    phone: editingContact?.phone || '',
    address: editingContact?.address || ''
  };
  const [contact, setContact] = useState({ name: '', email: '', phone: '', address: '' });
  const [editing, setEditing] = useState(false)
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, reset,setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  });

  useEffect(() => {
    setContact(editingContact || { name: '', email: '', phone: '', address: '' });
    if (editingContact) {
      setEditing(true)
      setValue('name', editingContact?.name);
      setValue('email', editingContact?.email);
      setValue('phone', editingContact?.phone);
      setValue('address', editingContact?.address);
    }
  }, [editingContact,setValue]);

  const onSubmitForm = (data) => {
    if (editingContact) {
      dispatch(editContact(editingContact.id, data));
      setContact(data);
    } else {
      dispatch(addContact(data));
    }
    setContact({})
    reset({
      name: '',
      email: '',
      phone: '',
      address: ''
    },{
      errors: {}
    });
  };
  
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" {...register('name')} placeholder="Enter name"  
          onChange={(event) =>
            setContact((prevContact) => ({
              ...prevContact,
              name: event.target.value
            }))
          }
          value={contact.name}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            {...register('email')} 
            placeholder="Enter email" 
            onChange={(event) =>
              setContact((prevContact) => ({
                ...prevContact,
                email: event.target.value
              }))
            }
            value={contact.email}
            />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone No.</Form.Label>
          <Form.Control 
          type="text" 
          {...register('phone')} 
          placeholder="Enter phone number" 
          onChange={(event) =>
            setContact((prevContact) => ({
              ...prevContact,
              phone: event.target.value
            }))
          }
          value={contact.phone}
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control 
          type="text" {...register('address')} 
          placeholder="Enter address" 
          onChange={(event) =>
            setContact((prevContact) => ({
              ...prevContact,
              address: event.target.value
            }))
          }
          value={contact.address}
          />
          {errors.address && <p style={{ color: 'red' }}>{errors.address.message}</p>}
        </Form.Group>

        <Button type="submit" style={{marginRight:'1rem'}}>{editing?'Update':'Add'}</Button>
        {editing && (
          <Button onClick={() => {
            setEditing(false)
            setContact({})
            reset({
              name: '',
              email: '',
              phone: '',
              address: ''
            });
            
          }}>
            Cancel
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default ContactForm;
