import React, { useRef } from "react";
import './contact.css';
import emailjs from 'emailjs-com';
import LinkdinLogo from '../../assets/linkedin.png';

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
                    <img src={LinkdinLogo} alt="LinkedIn Logo" className="link" />
                </div>
            </form>
            <div className="contactDesc">Lorem ipsum dolor for lo sit amet consectetur adipisicing elit. Aperiam dolore quasi vel, praesentium possimus dolorum facere sequi consectetur officia, veritatis alias nihil recusandae id quibusdam voluptatibus consequatur nesciunt? Commodi molestias rem nostrum animi culpa magnam atque impedit aut hic id aliquam reprehenderit odit officia, natus exercitationem at, eius, expedita quis reiciendis libero unde fugiat quia nam? Aliquam, animi suscipit vel harum modi incidunt dicta blanditiis nisi eveniet beatae officiis repudiandae, ab facilis aliquid at quis molestias a quae ad architecto repellendus accusamus sit! Omnis optio, illum beatae perferendis suscipit iure dignissimos quidem cum laboriosam, vitae et nihil maxime officiis reprehenderit minus saepe porro doloribus laudantium itaque dolorum quisquam debitis ea distinctio doloremque. Molestiae et quisquam officia eveniet optio ullam necessitatibus fugiat ad esse explicabo quibusdam beatae nemo, pariatur modi quidem repudiandae voluptatum odio iste? In itaque odio sunt totam illo, culpa, accusamus voluptatibus dolor inventore veniam a asperiores amet! Fugit dolorem porro cumque eveniet earum numquam quam nostrum in perspiciatis perferendis minus saepe explicabo amet temporibus voluptatum deserunt delectus architecto, nobis excepturi dolorum repudiandae distinctio beatae! Nemo provident voluptas aliquam, amet aperiam sint natus. Accusantium hic porro id, eveniet iste sequi ab voluptates aliquid, maiores at assumenda architecto repellendus consequatur.</div>
        </section>
    );
};

export default Contacts;
