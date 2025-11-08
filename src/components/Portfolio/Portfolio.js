import React from "react";
import "./Portfolio.css";
import filmStrip from "../../assets/portfolio-filmstrip.png";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">The Highlight Reel</h2>
      <p className="portfolio-subtitle">Watch the magic we’ve captured.</p>
      <div className="portfolio-player-container">
        <button className="portfolio-arrow left">
          <img src={arrowLeft} alt="Previous" />
        </button>
        <div className="portfolio-video-wrapper">
          <img src={filmStrip} alt="Film strip" className="film-strip-border" />
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button className="portfolio-arrow right">
          <img src={arrowRight} alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
