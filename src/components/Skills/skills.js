import React from "react";
import './skills.css';
import WD1 from '../../assets/wd1.png'
import cloudImg from '../../assets/cloudimg.png'
import cloudnet from '../../assets/cloudnet.png'





const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I design high-availability, secure, and cost-efficient cloud infrastructures on platforms like Azure and AWS. Specializing in agility and scalability, I create tailored solutions that ensure reliability and meet diverse business needs.</span>
            
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WD1} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>Proficient in creating dynamic and responsive websites using frameworks like Django, Laravel, and React. Experienced in crafting clean and user-friendly interfaces, ensuring seamless navigation and optimal performance.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={cloudnet} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Programming</h2>
                        <p>Experienced in writing efficient and scalable code in Python, JavaScript, and SQL. Adept at problem-solving, automating tasks, and developing tools to improve productivity and efficiency.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={cloudImg} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Cloud Computing</h2>
                        <p>Strong knowledge of cloud platforms such as Microsoft Azure and AWS. Skilled in deploying, managing, and optimizing cloud-based applications and services with a focus on scalability and security.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;
