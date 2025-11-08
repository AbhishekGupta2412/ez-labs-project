import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import mandalaLeft from "../../assets/mandala-left.png";
import mandalaRight from "../../assets/mandala-right.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    if (validateForm()) {
      setLoading(true);
      axios
        .post("https://vernanbackend.ezlab.in/api/contact-us/", formData)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            setStatus("Form Submitted");
            setFormData({ name: "", email: "", phone: "", message: "" });
          }
        })
        .catch((error) => {
          console.error("API Error:", error);
          setStatus("An error occurred. Please try again.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <img src={mandalaLeft} alt="" className="mandala mandala-left" />
      <img src={mandalaRight} alt="" className="mandala mandala-right" />

      <div className="contact-container">
        <div className="contact-info-left">
          <p>
            Whether you have an idea, a question, or simply want to explore how
            V can work together, it’s just a message away. Let’s catch up over
            coffee. Great stories always begin with a good conversation.
          </p>
        </div>

        <div className="contact-form-wrapper">
          <div className="form-header">
            <h2>Join the Story</h2>
            <p className="subtitle">
              Ready to bring your vision to life? Let’s talk.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Your name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Your email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your message*</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>
            <div className="form-footer">
              <button type="submit" disabled={loading}>
                {loading ? "..." : "Submit"}
              </button>
            </div>
          </form>

          <div className="contact-details-bottom">
            <a href="mailto:vernita@varnanfilms.co.in">
              vernita@varnanfilms.co.in
            </a>
            <span className="divider"></span>
            <a href="tel:+919873684567">+91 98736 84567</a>
          </div>

          {status && (
            <div
              className={`status-message ${
                status.includes("Error") ? "error" : "success"
              }`}
            >
              {status}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
