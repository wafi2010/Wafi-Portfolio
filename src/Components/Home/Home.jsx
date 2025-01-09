import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";
import wafiPic from "../Imgs/wafi.jpg";

const Home = () => {
  return (
    <div id="home" className="homepage">
      <section className="hero-section">
        <div className="home-main">
          <div className="hero-image" data-aos="zoom-in">
            <img src={wafiPic} alt="Your Picture" className="profile-pic" />
          </div>
          <div className="hero-content" data-aos="fade-up">
            <h1>Hello, I`m Wafi Hasan</h1>
            <span>
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1000,
                  "React Developer",
                  1000,
                  "MERN Developer",
                  1000,
                  "Freelancer",
                  1000,
                  "Youtuber",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "2em",
                  color: "rgb(0, 140, 255)",
                  letterSpacing: "2px",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </span>
            <p>Building innovative solutions with creativity and code.</p>
            <button class="button" style={{marginTop:'20px'}}>
              {" "}
              <a
                href="#about"
                style={{ textDecoration: "none", color: "black" }}
              >
                Lern More{" "}
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
