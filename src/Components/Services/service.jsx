import React from "react";
import "./service.css";
function service() {
  return (
    <>
      <div className="serv-container" id="services">
        <h1 className="serv-text">My Services</h1>
        <div className="serv-container">
          <div className="serv-grid">
            <div className="serv-box">
              <i class="bx bx-code-curly" style={{ fontSize: "80px",marginTop:'30px',color:'blue' }}></i>
              <br />
              <br /><br />
              <span>FrontEnd Development</span>
              <p>
                I worked on frontend development,designing a responsive and
                user-friendly website using HTML,CSS,JavaScript,Typescript and
                Tailwind. I ensured the website was mobile-friendly and
                implemented interactive features with React(if
                applicable),focusing on a seamless user experience.
              </p>
            </div>
            <div className="serv-box">
            <i class="bx bxl-react" style={{ fontSize: "100px",marginTop:'30px',color:'blue' }}></i>
              <br />
              <br /><br />
              <span>MERN Stack Development</span>
              <p>
                We provide custom web application development solutions for your
                business, startup, or project. MERN Stack is a modern and
                efficient web development technology, which helps you build
                fast, scalable and user-friendly applications.
              </p>
            </div>
            <div className="serv-box">
            <i class="bx bx-code" style={{ fontSize: "90px",marginTop:'30px',color:'blue' }}></i>
              <br />
              <br /><br />
              <span>Web Development</span>
              <p>
                I creating intuitive and visually appealing Web designs that
                enhance user experiences across digital platforms. My approach
                combines creativity with user-centered design principles to
                deliver engaging and effective interfaces.
              </p>
            </div>
            <div className="serv-box">
            <i class="bx bx-user" style={{ fontSize: "80px",marginTop:'30px',color:'blue' }}></i>
              <br />
              <br /><br />
              <span>Clint Projects</span>
              <p>
                I provide customized and reliable solutions for various client
                projects across multiple industries. My goal is to help
                businesses grow and succeed by delivering high-quality,
                scalable, and user-centric applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default service;
