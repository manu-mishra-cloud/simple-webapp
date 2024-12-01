import React from "react";
import './works.css';
import PortfolioImg from '../../assets/portfolio.jpg'

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">A glimpse into my work, showcasing my passion for design and attention to detail. Browse through these projects to see my skills in action and the quality of my design work.</span>
            <div className="worksImgs">
                <img src={PortfolioImg} alt="" className="worksImg" />
                <img src={PortfolioImg} alt="" className="worksImg" />
                <img src={PortfolioImg} alt="" className="worksImg" />
                <img src={PortfolioImg} alt="" className="worksImg" />
                <img src={PortfolioImg} alt="" className="worksImg" />
                <img src={PortfolioImg} alt="" className="worksImg" />
            
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;
