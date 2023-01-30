import React,{useEffect} from 'react';
import anime from "animejs/lib/anime.es.js"
import {Facebook, Linkedin, GitHub} from 'react-feather'

const Footer = () => {

    // useEffect(() => {
    //     anime({
    //         targets: '.square',
    //         keyframes: [
    //             {translateY: -40},
    //             {translateX: 250},
    //             {translateY: 40},
    //             {translateX: 0},
    //             {translateY: 0}
    //         ],
    //         duration: 4000,
    //         easing: 'easeOutElastic(1, .8)',
    //         loop: true
    //     });
    //
    // })

    return (
        <div style={{textAlign: 'center'}}>

            {/*<div className="circle"></div>*/}


            <div style={{margin:'10px'}}>
                <Facebook style={{margin:'10px'}}/>
                <Linkedin style={{margin:'10px'}}/>
                <GitHub style={{margin:'10px'}}/>
            </div>
            <div style={{margin:'10px'}}>
                <p>astoryed@gmail.com</p>
            </div>
            Designed & Built by Darakshan Mughal
        </div>
    )
}

export default Footer;