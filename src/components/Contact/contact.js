import React, { useRef } from "react";
import './contact.css';
import emailjs from 'emailjs-com';
import LinkdinLogo from '../../assets/linkedin.png';
import GitImg from '../../assets/gitimg.png';

const Contacts = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the form data using EmailJS
        emailjs
            .sendForm('service_yavenwa', 'template_zxxpxub', form.current, 'BkkVSHhGjknBjyYiI')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    alert('Your message has been sent successfully!');
                    form.current.reset(); // Reset the form after successful submission
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send message, please try again later.');
                }
            );
    };

    return (
        <section id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work.</span>

            <form ref={form} onSubmit={handleSubmit} className="contactForm">
                <input type="text" name="name" className="name" placeholder="Your Name" required />
                <input type="email" name="email" className="email" placeholder="Your Email" required />
                <textarea name="message" className="msg" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>


                <div className="links">
                    <a href="https://www.linkedin.com/in/i-am-manoranjan" target="_blank" rel="noopener noreferrer">
                        <img src={LinkdinLogo} alt="LinkedIn Logo" className="link" />
                    </a>
                    <a href="https://github.com/manu-mishra-cloud" target="_blank" rel="noopener noreferrer">
                        <img src={GitImg} alt="LinkedIn Logo" className="link" />
                    </a>
                </div>


                <div className="contactDesc">
                    Thank you for visiting our website! We appreciate your time, support, and interest in what we do. Our goal is to provide you with valuable content and services that meet your needs and expectations. If you have any questions, suggestions, or feedback, don’t hesitate to reach out to us—we love hearing from you! Your engagement means so much, and we look forward to welcoming you back soon. Stay connected with us for more updates and exciting news. Take care, stay safe, and keep exploring. We hope to see you again soon and continue our journey together!
                </div>

            </form>

        </section>
    );
};

export default Contacts;
