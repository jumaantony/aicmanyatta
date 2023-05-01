import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import InformationCenter from './components/InformationCenter';
import Sermons from './components/Sermons';
import Contact from './components/Contact';

function App() {
  return (
    <div className="">
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/information_center'  element={<InformationCenter/>}/>
            <Route path='/sermons'  element={<Sermons />}/>
            <Route path='/events' element={<Events />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
