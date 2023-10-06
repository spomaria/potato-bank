import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';

const App = () => {
  // React
  return (
      <Router>
        <header>
          <nav className='navbar'>
            <div className="nav-title">
                <span className='bolder'>Jos<span className='bolder' id='brown'>Potato</span></span>
            </div>
            <div className='nav-icons'>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element ={<Home/>} />
            <Route path='/about' element ={<About/>} />
            <Route path='/contact' element ={<Contact/>} />
            <Route path='/services' element ={<Services/>} />
            <Route path='/testimonials' element ={<Testimonials/>} />
          </Routes>
        </main>
      </Router>
  )
}

export default App;