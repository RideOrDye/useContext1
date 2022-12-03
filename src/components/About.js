import React from 'react'
import interactiveImg from '../images/desktop/image-interactive.jpg';
import "../index.css"
import aboutvideo1 from './videos/aboutvideo1.mp4'


const About = () => {
  
    return (
        <div class="outer-div">
            <p>TEST</p>
            <img src={interactiveImg} alt="" />
            <video src={aboutvideo1} width="600" height="300" controls="controls" muted loop autoplay="true" type="mp4" />
        </div>
     

    )
}

export default About
