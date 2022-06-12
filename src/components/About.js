import React from 'react'
import interactiveImg from '../images/desktop/image-interactive.jpg';
import {Link} from 'react-router-dom'

const About = () => {
  
    return (
        <div class="outer-div">
             <Link to="/Header"> Back to Home </Link>
              <img src={interactiveImg} alt="" />
        </div>
     

    )
}

export default About
