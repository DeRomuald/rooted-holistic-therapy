import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Media from './components/pages/Media'; 
import BookNow from './components/pages/BookNow'; 
import Home from './components/pages/Home';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/media' element={<Media/>} />
          <Route path='/book-now' element={<BookNow/>} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;

