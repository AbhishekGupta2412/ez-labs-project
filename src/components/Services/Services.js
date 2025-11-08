import React from "react";
import "./Services.css";
import filmImage from "../../assets/services-film.png";
import brandingImage from "../../assets/services-branding.png";
import artImage from "../../assets/services-art.png";
import stroke from "../../assets/services-stroke.svg"; // Correctly importing as SVG

const ServiceCard = ({ title, image, rotation }) => {
  return (
    <div
      className="service-card"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="service-card-image">
        <img src={image} alt={title} />
      </div>
      <span className="service-card-title">{title}</span>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-title-container">
        <h2 className="services-title">
          The storyboard reveals the breadth of our craft.
        </h2>
        <img src={stroke} alt="Paint stroke" className="title-stroke" />
      </div>
      // NEW
      <div className="services-card-container">
        <ServiceCard
          key="service-1"
          title="Film Production"
          image={filmImage}
          rotation={8}
        />
        <ServiceCard
          key="service-2"
          title="Branding"
          image={brandingImage}
          rotation={-2}
        />
        <ServiceCard
          key="service-3"
          title="Art Curation"
          image={artImage}
          rotation={-8}
        />
      </div>
    </section>
  );
};

export default Services;
