import React from "react";
import "./About.css";
import WafiPic from "../Imgs/wafi.jpg";
import uiLogo from "../Imgs/ui-ux.png";
function About() {
  return (
    <>
      <div className="About-Section" id="about">
        <div className="left-container">
          <div className="img-container">
            <img src={WafiPic} alt="" />
          </div>
          <div className="descrption">
            <h2>About Me</h2>
            <span>
              Hi! 👋 I'm Wafi, a Frontend and MERN Stack Developer. I specialize
              in creating responsive, user-friendly web applications using HTML,
              CSS, JavaScript, React, and TypeScript. On the backend, I work
              with Node.js, Express.js, and MongoDB to build robust and scalable
              solutions. I’m passionate about clean code, problem-solving, and
              delivering seamless user experiences. Let’s build something
              amazing together! 😊
            </span>
          </div>
          <div className="links">
            <a href="https://www.facebook.com/profile.php?id=61558223656712">
              {" "}
              <i
                class="bx bxl-facebook"
                style={{ color: "#0a9ce6", fontSize: "40px" }}
              ></i>
            </a>
            <a href="https://github.com/wafi2010">
              <i
                class="bx bxl-github"
                style={{ color: "#141616", fontSize: "40px" }}
              ></i>
            </a>
            <a href="https://www.upwork.com/freelancers/~010b7ab0a36a95d4f7?viewMode=1">
              <i
                class="bx bxl-upwork"
                style={{ color: "green", fontSize: "40px" }}
              ></i>
            </a>
              <a href="https://www.behance.net/wafihasan">
              <i
              class="bx bxl-behance"
              style={{ color: "#0e0ede", fontSize: "40px" }}
            ></i></a>
            <a href="www.youtube.com/@wafihasan05">
              <i
                class="bx bxl-youtube"
                style={{ color: "red", fontSize: "40px" }}
              ></i>
            </a>
          </div>
        </div>
        <div className="right-container">
          <h2 style={{ textAlign: "center", color: "white" }}>My Skills</h2>
          <div className="skills">
            <div className="skill">
              <i
                className="bx bxl-html5"
                style={{ color: "#d8de0e", fontSize: "50px" }}
              ></i>
            </div>
            <div className="skill">
              <i
                className="bx bxl-css3"
                style={{ color: "#d8de0e", fontSize: "50px" }}
              ></i>
            </div>
            <div className="skill">
              <i
                className="bx bxl-javascript"
                style={{ color: "#d8de0e", fontSize: "50px" }}
              ></i>
            </div>
            <div className="skill">
              <i
                className="bx bxl-react"
                style={{ color: "#d8de0e", fontSize: "50px" }}
              ></i>
            </div>
            <div className="skill">
              <i
                className="bx bxl-redux"
                style={{ color: "#d8de0e", fontSize: "50px" }}
              ></i>
            </div>
            <div className="skill">
              <i
                className="bx bxl-typescript"
                style={{ color: "#d8de0e", fontSize: "50px" }}
              ></i>
            </div>
            <div className="skill">
              <i
                className="bx bxl-nodejs"
                style={{ color: "#d8de0e", fontSize: "50px" }}
              ></i>
            </div>
            <div className="skill">
              <i
                className="bx bxl-mongodb"
                style={{ color: "#d8de0e", fontSize: "50px" }}
              ></i>
            </div>
            <div className="skill">
              <i
                className="bx bxl-tailwind-css"
                style={{ color: "#d8de0e", fontSize: "50px" }}
              ></i>
            </div>
          </div>
          <h2 style={{ textAlign: "center", color: "white" }}>Basic Skills</h2>
          <div className="basic-skill">
            <div className="skill">
              <i
                className="bx bxl-python"
                style={{ color: "#d8de0e", fontSize: "50px" }}
              ></i>
            </div>
            <div className="skill">
              <i
                className="bx bxl-c-plus-plus"
                style={{ color: "#d8de0e", fontSize: "50px" }}
              ></i>
            </div>
            <div className="skill">
              <img
                src={uiLogo}
                alt="UI-UX"
                style={{ color: "#d8de0e", width: "70px" }}
              />
            </div>
            <div className="skill">
              <i
                className="bx bxl-aws"
                style={{ color: "#000", fontSize: "50px" }}
              ></i>
            </div>
            <div className="skill">
              <i
                className="bx bxl-git"
                style={{ color: "#000", fontSize: "50px" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
