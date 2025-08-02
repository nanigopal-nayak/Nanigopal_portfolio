import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_image.png'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profile_img} alt="" />
            <h1><span>I'm Nanigopal,</span> a Full-Stack Developer based in India.</h1>
            <p>Full-Stack Developer from India skilled in Java, backend systems, and building responsive web applications.</p>
            <div className="hero-action">
                <AnchorLink className="anchor-link" offset={50} href="#contact"><div className="hero-connect">Connect with me</div></AnchorLink>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}
export default Hero