import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Room from './Room';
import Navbar from './Navbar.'; // fixed the typo
import Footer from './Footer';
import Contact from './contact'; // new import

function App() {
  return (
    <>
      <Navbar />

      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/room/:roomID' element={<Room />} />
          <Route path='/contact' element={<Contact />} /> {/* new route */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
