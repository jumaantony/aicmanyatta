import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import InformationCenter from './components/InformationCenter';
import Store from './components/Store';

function App() {
  return (
    <div className="">
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/information_center'  element={<InformationCenter/>}/>
            <Route path='/events' element={<Events />} />
            <Route path='/store'  element={<Store />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
