import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Media from './components/pages/Media.js'; 
import BookNow from './components/pages/BookNow'; 
import Home from './components/pages/Home'
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/media' component={Media} />
          <Route path='/book-now' component={BookNow} />
      </Routes>
      </Router>
      </>
  );
}

export default App;

