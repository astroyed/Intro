import React ,{useEffect} from 'react';
import anime from "animejs/lib/anime.es.js"
import { Row, Col, Card } from 'antd'
import Profile from '../../assests/images/profile.jpg'

const About = () => {

    useEffect(() => {
        anime({
            targets: '.about-bar',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            delay: 500,
            translateX: function () {
                return anime.random(0,300);
            },
            loop: true
        });
    })

    return (
        <div id="about">
            <div className="about-bar"></div>

            <h3>About Me</h3>
            <p>I'm a simple girl who likes making weird things with web technologies.</p>
            <p>I like to resolve problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.</p>
            <p>When not working or futzing around with code, I watch movies or play games to escape from reality.</p>

            {/*<Card bordered={false} style={{ margin:'auto',width: 'auto', borderRadius: '10px', backgroundColor:'rgba(255, 255, 255, 0.5)' }}>*/}
                {/*<img width="300" height="400" src={Profile} alt="No Image"/>*/}
            {/*</Card>*/}

        </div>
    )
}

export default About;