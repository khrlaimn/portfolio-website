import React, { useState } from "react";
import { FaTelegram, FaRegEnvelope, FaRegUser, FaRegMap } from "react-icons/fa";
import "./contact.css";
import axios from "axios";
import shapeOne from "../../assets/shape-1.png";

const Contact = () => {
  // State to manage form input values
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Event handler for input changes
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to Google Sheets API using Axios
    axios
      .post(
        "https://sheet.best/api/sheets/afd20e9d-075d-44d6-940f-6f8907a4c835",
        form
      )
      .then((response) => {
        console.log(response);

        // Clearing form fields after successful submission
        setForm({ name: "", email: "", subject: "", message: "" });
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs">Contact Me</h2>

      <p className="section__subtitle">
        Let's <span>Hit Me Up!</span>
      </p>

      {/* Contact Information */}
      <div className="contact__container container grid">
        <div className="contact__content">
          {/* Address Card */}
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap />
            </span>
            <h3 className="contact__card-title">Address</h3>
            <p className="contact__card-data">Penang, Malaysia</p>
          </div>

          {/* Profile Card */}
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegUser />
            </span>
            <h3 className="contact__card-title">Student</h3>
            <p className="contact__card-data">Seeking for Internship</p>
          </div>

          {/* Email Card */}
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope />
            </span>
            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-data">khrlaimn2001@gmail.com</p>
          </div>

          {/* Telegram Card */}
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaTelegram />
            </span>
            <h3 className="contact__card-title">Telegram</h3>
            <p className="contact__card-data">@khrlaimn2001</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group grid">
            {/* Full Name Input */}
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your full Name <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                className="contact__form-input"
              />
            </div>

            {/* Email Input */}
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your Email Address <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                className="contact__form-input"
              />
            </div>
          </div>

          {/* Subject Input */}
          <div className="contact__form-div">
            <label className="contact__form-tag text-cs">
              Your Subject <b>*</b>
            </label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              value={form.subject}
              className="contact__form-input"
            />
          </div>

          {/* Message Input */}
          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag text-cs">
              Your Message <b>*</b>
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              className="contact__form-input"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="contact__submit">
            <p> * Accept the terms and conditions.</p>
            <button type="submit" className="btn text-cs">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Decorative Shape */}
      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      {/* Background Wrapper */}
      <div className="section__bg-wrapper">
        <span className="bg__title">Contact Me</span>
      </div>
    </section>
  );
};

export default Contact;
