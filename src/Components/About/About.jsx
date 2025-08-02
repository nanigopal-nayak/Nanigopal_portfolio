import React from 'react';
import './About.css';

import theme_pattern from '../../assets/theme_pattern.svg';
import profile_image from '../../assets/profile_image1.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="about-sections">
                <div className='about-left'>
                    <img src={profile_image} alt="" style={{ height: "450px", width: "400px" }} />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a dedicated full-stack developer skilled in Java, Spring Boot, and React, focused on building scalable, user-friendly web apps with real-world impact.</p>
                        <p>Motivated developer creating dynamic web applications using React and Spring Boot, with emphasis on functionality and clean design.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "78%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Java</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Spring Boot</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React Js</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>7+</h1>
                    <p>PROJECT COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>1000+</h1>
                    <p>HOURS OF SUPPORT</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div >
    );
};

export default About;