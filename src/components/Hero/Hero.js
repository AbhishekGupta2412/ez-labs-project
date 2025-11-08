import React from "react";
import "./Hero.css";
import logo from "../../assets/logo.png";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-logo">
          <img src={logo} alt="Varnan Films" />
        </div>
        <h1 className="hero-title">
          Varnan is where stories find their voice and form
        </h1>
      </div>
    </section>
  );
};

export default Hero;
