import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from './Register/Register';
import Home from './Home/Home';
import ContactApp from './Contact/ContactApp';
import Login from './Emilus/LoginSignup/Login';
import SignUp from './Emilus/LoginSignup/SignUp';
import Product from './Emilus/Product/Product';
import AddProduct from './Emilus/Product/AddProduct';
import EditProduct from './Emilus/Product/EditProduct';

export default function ManageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact-app" element={<ContactApp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product" element={<EditProduct />} />
      </Routes>
    </Router>
  )
}
