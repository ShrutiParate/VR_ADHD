import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    businessType: "",
    agreeMarketing: false,
    agreePrivacy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-text">
        <h1>
          Get in <span>touch</span>
        </h1>
        <p>
          Drop us a message to discuss potential missions, partnerships, or just to say hi!
        </p>
      </div>
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First name*"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name*"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          >
            <option value="">Country*</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
          </select>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
            required
          >
            <option value="">Business Type*</option>
            <option value="Startup">Startup</option>
            <option value="Corporate">Corporate</option>
            <option value="Freelancer">Freelancer</option>
          </select>
        </div>
        <div className="form-checkbox">
          
          <label>
            <input
              type="checkbox"
              name="agreePrivacy"
              checked={formData.agreePrivacy}
              onChange={handleInputChange}
              required
            />
            I have read and agree to the{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            .
          </label>
        </div>
        <button type="submit" className="submit-btn">
          Speak with a us
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
