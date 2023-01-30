import React, { useEffect } from 'react'
import anime from "animejs/lib/anime.es.js"
import bk1 from '../../assests/images/01.png'
import bk2 from '../../assests/images/02.png'
import Parallax from 'parallax-js'
import Header from './header'
import About from '../about'
import Work from '../work'
import Skills from '../skills'
import Contact from '../contact'
import Footer from './footer'


const Layouts = (props) => {

    useEffect(() => {

        let scene = document.getElementById('scene');
        let parallaxInstance = new Parallax(scene);

        let textWrapper = document.querySelector('.intro .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: true})
            .add({
                targets: '.intro .letter',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i + 1)
            }).add({
            targets: '.intro',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });

        // anime({
        //     targets: '.square',
        //     translateX: 270,
        //     loop: 3,
        //     easing: 'easeInOutSine'
        // });

        // anime({
        //     targets: '.circle',
        //     width: '100%', // -> from '28px' to '100%',
        //     easing: 'easeInOutQuad',
        //     direction: 'alternate',
        //     loop: true
        // });

        anime({
            targets: '.line',
            translateX: [100, 250], // from 100 to 250
            delay: 500,
            direction: 'alternate',
            loop: true
        });
    })

    function randomValues() {
        // anime({
        //     targets: '.circle',
        //     translateX: function () {
        //         return anime.random(0, 500);
        //     },
        //     easing: 'easeInOutQuad',
        //     duration: 750,
        //     complete: randomValues
        // });
    }

    randomValues();


    return (
       <div>

           <Header/>

           <div style={{height:'1300px'}}>
               <div id="scene">
                   <img data-depth="0.3" src={bk1} data-speed='-6' alt="No Image"/>
                   <img data-depth="0.6" src={bk2} data-speed='-6' alt="No Image"/>
               </div>

               <div className="intro-header">
                   <h2>Hi, my name is</h2>
                   <h1 className="intro">
                   <span className="text-wrapper">
                       <span className="letters title">DARAKSHAN</span>
                   </span>
                   </h1>
                   <h1 className="intro-sub">Build things for web</h1>
                   <h2 className="intro-tagline">I’m a Full Stack Web Developer.</h2>
               </div>
           </div>


           <About/>

           <Work/>

           <Skills/>

           <Contact/>

           <Footer/>
       </div>
    )
}

export default Layouts;