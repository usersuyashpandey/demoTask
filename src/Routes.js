import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import App from './App';
import Register from './components/Register/Register';

export default function ManageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}
