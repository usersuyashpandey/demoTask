import React from "react";
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
import * as y from "yup";

const schema = y.object({
  name: y.string().required("Please enter your name"),
  phone: y.string()
      .required("Phone no. is required")
      .matches(/^[\d\+ \-\(\)]+$/, "Please enter a valid phone number"),
  address: y.string().required("Please enter your address"),
  email: y.string().email("Please enter a valid email address").required("Please enter your email"),
});

const ContactForm = ({ onSubmit, contact }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: contact,
  });

  const onSubmitForm = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <label>
        Name:
        <input
          type="text"
          {...register("name")}
          placeholder="Enter your name"
        />
        {errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          {...register("phone")}
          placeholder="Enter your phone number"
        />
        {errors.phone && <p style={{color:'red'}}>{errors.phone.message}</p>}
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          {...register("address")}
          placeholder="Enter your address"
        />
        {errors.address && <p style={{color:'red'}}>{errors.address.message}</p>}
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          {...register("email")}
          placeholder="Enter your email"
        />
        {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
      </label>
      <br />
      <button type="submit">{contact ? "Update" : "Add"}</button>
    </form>
  );
};

export default ContactForm;
