import React from "react";
import './skills.css';
import WD1 from '../../assets/wd1.png'
import cloudImg from '../../assets/cloudimg.png'
import cloudnet from '../../assets/cloudnet.png'





const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis ducimus commodi qui eligendi quam at? Perspiciatis soluta quam ea tempora quis! Quia, atque quis!</span>
            
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WD1} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, qui.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={cloudnet} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam cupiditate.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={cloudImg} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Cloud Computing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim?</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;
