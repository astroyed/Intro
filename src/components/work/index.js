import React,{useEffect} from 'react';
import anime from "animejs/lib/anime.es.js"
import { Row, Col, Tabs } from 'antd';


const Work = () => {

    useEffect(() => {
        anime({
            targets: '.work-bar',
            width: '20%', // -> from '28px' to '100%',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            delay: 500,
            translateX: function () {
                return anime.random(0, 300);
            },
            loop: true
        });

    })

    return (
        <div id="work">
            <div className="work-bar"></div>

            <Row>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <h3>Where I’ve Worked</h3>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Tabs defaultActiveKey="1" >

                    <Tabs.TabPane tab="LimeSoftware Logics" key="1">
                        <h2>LimeSoftware Logics - Full Stack Web Developer</h2>
                        <p>February 2020 - Present</p>

                        <ul>
                            <li>
                                <p>Work with a variety of different languages, platforms,
                                    frameworks, and content management systems such as
                                    JavaScript, React, Heroku, Zapier, Zoho</p>
                            </li>

                            <li>
                                <p>Write modern, maintainable code for a diverse array of client and internal projects</p>
                            </li>
                        </ul>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Coders Thrive" key="2">
                        <h2>Coders Thrive - Web Developer</h2>
                        <p>October 2018 - April 2019</p>

                        <ul>
                            <li>
                                <p>Mainly did the backend development in Angular.js for their client based product</p>
                            </li>

                            <li>
                                <p>Collaborated with a small team of developers and Integrate Firebase and Mongo for the database management</p>
                            </li>
                        </ul>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Fly Mashriq" key="3">
                        <h2>Fly Mashriq - Web Developer</h2>
                        <p>January 2018 - October 2018</p>

                        <ul>
                            <li>
                                <p>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</p>
                            </li>

                            <li>
                                <p>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</p>
                            </li>
                        </ul>
                    </Tabs.TabPane>

                </Tabs>
                </Col>

            </Row>

        </div>
    )
}

export default Work;