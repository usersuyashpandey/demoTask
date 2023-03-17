import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ContactApp from './ContactApp';
import Register from './components/Register/Register';
import Home from './components/Home/Home';

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
