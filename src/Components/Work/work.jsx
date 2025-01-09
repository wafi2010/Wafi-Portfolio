import React from "react";
import "./work.css";

function Work() {
  return (
    <>
      <div className="work-container" id="work">
        <h1 className="work-title">My Work History</h1>
        <div className="work-grid">
          <div className="work-box">
            <h2 className="work-position">MERN Stack Developer</h2>
            <span className="work-company">Ai Verse_07</span>
            <p className="work-duration">2024 April 10 to Present</p>
            <p className="work-description">
              Developed and maintained various web applications using React,
              Node.js, Express.js, and MongoDB. Collaborated with
              cross-functional teams to ensure high-quality deliverables.
            </p>
          </div>
          <div className="work-box">
            <h2 className="work-position">Front-End Developer</h2>
            <span className="work-company">Pi Agency</span>
            <p className="work-duration">2023 Jun 10 to 2024 Jan</p>
            <p className="work-description">
              Designed and developed user interfaces using React. Worked closely
              with back-end developers to integrate APIs and ensure seamless
              user experiences.
            </p>
          </div>
          <div className="work-box">
            <h2 className="work-position">Intern</h2>
            <span className="work-company">Tech Solutions</span>
            <p className="work-duration">2022 Jan to 2023 May</p>
            <p className="work-description">
              Assisted in developing small web projects using HTML, CSS, and
              JavaScript. Gained hands-on experience with version control and
              basic database management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
