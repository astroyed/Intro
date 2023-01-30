import React ,{useEffect} from 'react';
import anime from "animejs/lib/anime.es.js"

const Contact = () => {

    useEffect(() => {
        anime({
            targets: '.contactBar',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            delay: 500,
            translateX: function () {
                return anime.random(0, 200);
            },
            loop: true
        });

    })

    return (
        <div id="contact">
            <div className="contactBar"></div>
            <h3>Get In Touch</h3>
            <p>Although I’m not currently looking for any new opportunities, my inbox is always open.</p>
            <p>Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        </div>
    )
}

export default Contact;