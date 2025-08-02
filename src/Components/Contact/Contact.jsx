import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'

import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "eacc3804-c4fb-4aae-8a49-79802f930e39");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });

        const result = await response.json();

        if (result.success) {
            console.log("Success:", result);
            alert("Message sent successfully!");
            event.target.reset(); // clear form
        } else {
            console.error("Web3Forms Error:", result);
            alert("Failed to send message. Please try again.");
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        alert("Something went wrong. Please check your network or try again later.");
    }
};
    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>nanigopalnayak7@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+91 8338841201</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Aswath Nagar, Marathahalli, Banglore 560037</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter Your name" name="name" />

                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter Your email" name="email" />

                    <label htmlFor="">Write Your message here</label>
                    <textarea type="text" placeholder="Enter Your message" name="message" rows="8" />

                    <button type="submit" className="contact-submit">
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Contact