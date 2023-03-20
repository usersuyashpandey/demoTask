import React, { useEffect,useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
import * as y from "yup";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { addContact, editContact } from "../../actions";
import { useDispatch } from "react-redux";

const schema = y.object({
  name: y.string().required("Please enter your name"),
  phone: y.string()
    .required("Phone no. is required")
    .matches(/^[\d\+ \-\(\)]+$/, "Please enter a valid phone number"),
  address: y.string().required("Please enter your address"),
  email: y.string().email("Please enter a valid email address").required("Please enter your email"),
});

const ContactForm = ({editingContact,editingContactId}) => {
  console.log(editingContact,editingContactId,'editingContact,editingContactId')
  const [buttonLabel, setButtonLabel] = useState('ADD')
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
useEffect(()=>{
  if(editingContact){
    setButtonLabel('Edit')
  }else{
    setButtonLabel('Add')
  }
},[editingContact])

  const onSubmitForm = (data) => {
    if (editingContactId) {
      dispatch(editContact(editingContact.id, data))
      reset({
        name: "",
        email: "",
        phone: "",
        address: ""
      });
    } else {
      dispatch(addContact(data));
      reset({
        name: "",
        email: "",
        phone: "",
        address: ""
      });
    }
  };

  const onCancel = () => {
    reset({
      name: "",
      email: "",
      phone: "",
      address: ""
    });
    console.log(editingContact,'jjop')
  };


  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" {...register("name")} placeholder="Enter name" defaultValue={editingContactId  && editingContact?.name}/>
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" {...register("email")} placeholder="Enter email" defaultValue={editingContactId ? editingContact.email : ""}/>
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Phone No.</Form.Label>
          <Form.Control type="text" {...register("phone")} placeholder="Enter phone number" defaultValue={editingContactId ? editingContact.phone : ""}/>
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" {...register("address")} placeholder="Enter address" defaultValue={editingContactId ? editingContact.address : ""}/>
          {errors.address && <p style={{ color: 'red' }}>{errors.address.message}</p>}
        </Form.Group>
        <Button type="submit">{buttonLabel}</Button>
        {editingContactId && <Button onClick={() => {
          reset(formValues => ({
            ...formValues,
           
          }))
        }}>Cancel</Button>}
      </Form>
    </Container>
  );
};
export default ContactForm
