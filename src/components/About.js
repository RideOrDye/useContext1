import React from 'react'
import "../index.css"
import lighttunnel from './videos/lighttunnel.mp4'


const About = () => {
  
    return (
        <div class="outer-div">
            <div class="overlay"></div>
            <video class="tunnel-vid" width="100vw" height="100vh"  muted loop autoplay="true" type="mp4">
                 <source src={lighttunnel} type="video/mp4" />
            </video>

            
           
        </div>
     

    )
}

export default About
