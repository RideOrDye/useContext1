import React from 'react'
import retrocyber from '../../assets/images/desktop/retrocyber.jpg'
import cybercargame from '../videos/cybercargame.mp4'
import './Games.css'

function Games() {
    return (
        <div class='gamecontainer'>


            <img class="nftpic" src={retrocyber}></img>

            {/* <div class="games_container"> */}


            <video class='carcruising' muted loop autoplay="true" type="mp4" id="gamevid">
                <source src={cybercargame} type="video/mp4" />
            </video>

            <div class="games_intro">
                <h1>Cyber Chase 2</h1>
                <h2>Venture deep inside a hexed castle where dangerous terrain,
                    challenging puzzles and fearsome enemies await in this exciting action-adventure.</h2>
                <button class="chase_btn">
                    <h2>Find out more</h2>
                </button>

            </div>

            <div class="grid_section">

                <main class="parent_grid">

                    <article class="item_1">
                        <div class="flex">
                            <div>
                                {/* <img src="./images/image-daniel.jpg" alt="daniel clifford"> */}
                            </div>
                            <div>
                                <h2 class="name">Daniel Clifford</h2>
                                <p class="position">Verified Graduate</p>
                            </div>
                        </div>
                        <p>
                            I received a job offer mid-course, and the subjects I learned were current, if not more so,
                            in the company I joined. I honestly feel I got every penny’s worth.
                        </p>
                        <p>
                            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                            transition and have heard some people who had an amazing experience here. I signed up
                            for the free intro course and found i
                        </p>
                    </article>

                    <article class="item_2">
                        <div class="flex">
                            <div>
                                {/* <img src="./images/image-daniel.jpg" alt="daniel clifford"> */}
                            </div>
                            <div>
                                <h2 class="name">Daniel Clifford</h2>
                                <p class="position">Verified Graduate</p>
                            </div>
                        </div>
                        <p>
                            I received a job offer mid-course, and the subjects I learned were current, if not more so,
                            in the company I joined. I honestly feel I got every penny’s worth.
                        </p>
                        <p>
                            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                            transition and have heard some people who had an amazing experience here. I signed up
                            for the free intro course and found i
                        </p>

                    </article>
                    <article class="item_3">
                        <div class="flex">
                            <div>
                                {/* <img src="./images/image-daniel.jpg" alt="daniel clifford"> */}
                            </div>
                            <div>
                                <h2 class="name">Daniel Clifford</h2>
                                <p class="position">Verified Graduate</p>
                            </div>
                        </div>
                        <p>
                            I received a job offer mid-course, and the subjects I learned were current, if not more so,
                            in the company I joined. I honestly feel I got every penny’s worth.
                        </p>
                        <p>
                            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                            transition and have heard some people who had an amazing experience here. I signed up
                            for the free intro course and found i
                        </p>
                    </article>
                    <article class="item_4" >
                        <div class="flex">
                            <div>
                                {/* <img src="./images/image-daniel.jpg" alt="daniel clifford"> */}
                            </div>
                            <div>
                                <h2 class="name">Daniel Clifford</h2>
                                <p class="position">Verified Graduate</p>
                            </div>
                        </div>
                        <p>
                            I received a job offer mid-course, and the subjects I learned were current, if not more so,
                            in the company I joined. I honestly feel I got every penny’s worth.
                        </p>
                        <p>
                            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                            transition and have heard some people who had an amazing experience here. I signed up
                            for the free intro course and found i
                        </p>
                    </article>

                    <article class="item_5">
                        <div class="flex">
                            <div>
                                {/* <img src="./images/image-daniel.jpg" alt="daniel clifford"> */}
                            </div>
                            <div>
                                <h2 class="name">Daniel Clifford</h2>
                                <p class="position">Verified Graduate</p>
                            </div>
                        </div>
                        <p>
                            I received a job offer mid-course, and the subjects I learned were current, if not more so,
                            in the company I joined. I honestly feel I got every penny’s worth.
                        </p>
                        <p>
                            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                            transition and have heard some people who had an amazing experience here. I signed up
                            for the free intro course and found i
                        </p>
                    </article>

                    <article class="item_6">

                        <div class="flex">
                            <div>
                                {/* <img src="./images/image-daniel.jpg" alt="daniel clifford"> */}
                            </div>
                            <div>
                                <h2 class="name">Daniel Clifford</h2>
                                <p class="position">Verified Graduate</p>
                            </div>
                        </div>
                        <p>
                            I received a job offer mid-course, and the subjects I learned were current, if not more so,
                            in the company I joined. I honestly feel I got every penny’s worth.
                        </p>
                        <p>
                            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                            transition and have heard some people who had an amazing experience here. I signed up
                            for the free intro course and found i
                        </p>
                    </article>
                </main>
            </div>
        </div>



    )
}

export default Games

