import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import '../index.css'
import { Outlet} from "react-router-dom";

const Header = () => {
    return(
      <>
        <header className="header">
            <div className="logo">
                <img src={logo} alt=""/>
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
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
         <Outlet />
        </div>
      </header>
      </>
    )
}

export default Header 