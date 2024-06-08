// src/App.jsx
import React, { useState } from 'react';
import RealEstateList from './components/RealEstateList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Hero, Navbar, Sidebar } from './components';
import Home from './pages/Home';

const App = () => {
  const [navToggle, setNavToggle] = useState(false)

  const handleNav = () => {
    setNavToggle((prev) => !prev)
  }

  return (
    <BrowserRouter>
      <Navbar navToggle={navToggle} handleNav={handleNav} />
      <Sidebar navToggle={navToggle} handleNav={handleNav} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
      {/* <RealEstateList /> */}
    </BrowserRouter>
  );
};

export default App;
