import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Room from './Room';
import Navbar from './Navbar.';// after import we have to use it in funtion
import Footer from './Footer';


function App() {
  return (
    <>
      <Navbar />

      <div className="content"> {/* Optional: apply styling like padding/margin here */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/room/:roomID' element={<Room />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;