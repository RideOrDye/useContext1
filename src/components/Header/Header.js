import React from 'react'
import '../Header/Header.css'
// import logo from '../..images/mobile/logo.svg'
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import '../..'


const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          {/* <img src={logo} alt="" /> */}
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/about">About </Link>
            </li>

            <li>
              <Link to="/">Careers </Link>
            </li>

            <li>
              <Link to="/"> Events</Link>
            </li>
            <li>
              <Link to="/">  Products </Link>
            </li>
            <li>
              <Link to="/"> Support </Link>
            </li>

          </ul>
        </nav>


        <div className="menu-btn" >
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
          <Outlet />
        </div>
      </header>
    </>
  )
}

export default Header 