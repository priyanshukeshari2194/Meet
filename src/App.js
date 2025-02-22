import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Room from './Room';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room/:roomID' element={<Room/>}/>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
