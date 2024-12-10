import React from "react";
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../assets/man.png'
import hirepng from '../../assets/hire.png'

const intro = () => {
    return (
       <section id="intro">

        <div className="introContent">
            <span className="hello">Hello,</span><br />
            <span className="introText">I'm <span className="introName">Manu <br /></span>Website Designer</span>
            <p className="introPara">I am a skilled web designer with experience in creating visually appealing and user-friendly websites.</p>
            <Link><button className="btn"><img src={hirepng} alt="" className="btnImg" />Hire Me</button></Link>
        </div>

        <img src={bg} alt="" className="bg" />
        
       </section>
    );
}

export default intro;
