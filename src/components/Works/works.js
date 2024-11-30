import React from "react";
import './works.css';
import PortfolioImg from '../../assets/portfolio.jpg'

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur, aliquid eveniet beatae modi quos?</span>
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
