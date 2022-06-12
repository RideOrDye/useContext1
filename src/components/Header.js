import React from 'react'
import logo from '../images/logo.svg'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './About.js';


const Header = () => {
    return(
      <Router>
        
        <header className="header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            
          <nav>
              <ul>
                  <li>
                  <Link to="/About">  About </Link>
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
        </div>
        <div>
          <Switch>
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </header>
      </Router>
    )
}

export default Header 