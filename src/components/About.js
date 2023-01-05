import React from 'react'
import { useEffect, useState, useRef } from 'react'
import "../index.css"
import lighttunnel from './videos/lighttunnel.mp4'



const About = () => {


    const videoRef = useRef();
    const [playbackRate, setPlaybackRate] = useState(.2);

    //useEffect is checking if theres changes to the playbackRate (in state)
    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
    }, [playbackRate]);

    const setPlayBack = (e) => {
        setPlaybackRate(e.target.value);
    };


    return (
        <div class="outer-div">
            <div class="overlay"></div>
            <video ref={videoRef} class="tunnel-vid" muted loop autoplay="true" type="mp4" id="backgroundvideo" >
                <source src={lighttunnel} type="video/mp4" />
            </video>
            <div class="cyberdiv">
                <p>CYBER EXPERIENCE</p>
            </div>

            {/* if href =
            'http://localhost:3000/about' dont show about link  */}



        </div>


    )
}

export default About
