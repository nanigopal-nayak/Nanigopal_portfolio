import React from "react";
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="Footer Logo" />
                    <p>Full-Stack Developer from India | Expertise in Java, backend systems & responsive web applications.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-buttom">
                <p className="footer-bottom-left">
                    © 2025 Nanigopal. All rights reserved.
                </p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy policy</p>
                    <p>Contact with me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer