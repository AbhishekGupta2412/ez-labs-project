import React from "react";
import "./About.css";
import sticky1 from "../../assets/sticky-note-1.png";
import sticky2 from "../../assets/sticky-note-2.png";
import sticky3 from "../../assets/sticky-note-3.png";

const StatBox = ({ number, label, rotation, image }) => {
  return (
    <div
      className="stat-box"
      style={{
        transform: `rotate(${rotation}deg)`,
        backgroundImage: `url(${image})`,
      }}
    >
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">
        Every project is more than just a brief - it’s a new chapter waiting to
        be written. Together, we've crafted tales that inspire, connect, and
        endure.
      </h2>

      <div className="about-stats-container">
        <StatBox
          key="stat-1"
          number="85+"
          label="Projects"
          rotation={10}
          image={sticky1}
        />
        <StatBox
          key="stat-2"
          number="50+"
          label="Happy Clients"
          rotation={-5}
          image={sticky2}
        />
        <StatBox
          key="stat-3"
          number="10+"
          label="Experts Team"
          rotation={8}
          image={sticky3}
        />
      </div>
    </section>
  );
};

export default About;
