import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Reservation from './page/reservation.jsx'
import Contact from './page/contact.jsx'
import NotFound from './page/NotFound.jsx'
import Services from './page/services.jsx'
import servicedetaile from './page/servicedetaile.jsx'

function App() {
  const navStyles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    nav {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    nav h2 {
      color: white;
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .nav-links {
      display: flex;
      gap: 30px;
      list-style: none;
    }

    nav a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      transition: all 0.3s ease;
      padding: 10px 15px;
      border-radius: 5px;
      position: relative;
      text-transform: capitalize;
    }

    nav a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background-color: white;
      transition: width 0.3s ease;
    }

    nav a:hover {
      transform: translateY(-2px);
      background-color: rgba(255, 255, 255, 0.1);
    }

    nav a:hover::after {
      width: 100%;
    }

    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        gap: 20px;
        padding: 15px 20px;
      }

      nav h2 {
        font-size: 18px;
      }

      .nav-links {
        flex-direction: column;
        gap: 10px;
        width: 100%;
        text-align: center;
      }
    }
  `

  return (
    <BrowserRouter>
      <style>{navStyles}</style>
      <nav>
        <h2>🏨 Hôtel Kara</h2>
        <ul className="nav-links">
          <li><Link to="/">Réservation</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path={"/"} element={<Reservation/>} />
        <Route path={"/contact"} element={<Contact/>} />
        <Route path={"/services"} element={<Services/>}/>
        <Route path="/servicedetails/:id" element={<servicedetaile/>} />
        <Route path= {"*"} element= {<NotFound/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
