import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exam from './exam';
import Login from './components/login';
import Results from './components/results';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Exam />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default App;