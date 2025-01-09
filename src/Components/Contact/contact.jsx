import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import wafiPic from "../Imgs/wafi.jpg";
const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fb120b8",
        "template_r3dj32y",
        form.current,
        "rQr8kxjYVip-kjHCC"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setFormData({ name: "", email: "", message: "" });
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <div className="contact-me" id="contact">

      <div className="contact-me-container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" id="btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
