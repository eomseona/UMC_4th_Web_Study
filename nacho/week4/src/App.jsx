import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Home from './pages/home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
  )
};

export default App;