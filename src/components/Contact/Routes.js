import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from '../Register/Register';
import Home from '../Home/Home';
import ContactApp from './ContactApp';

export default function ManageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact-app" element={<ContactApp />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}
