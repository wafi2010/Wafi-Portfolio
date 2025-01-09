import React from "react";
import "./project.css";
import Note from '../Imgs/note.png'
import Chat from '../Imgs/chat.png'
import Game from '../Imgs/game.png'
import Recipe from '../Imgs/recipe.png'
import Password from '../Imgs/pass.png'
function project() {
  return (
    <>
      <div className="projects-container" id="projects">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-grid">
          <div className="project-box">
            <img src={Note} alt="" />
            <span>I-NoteBook Application</span>
            <p>Using Html,CSS,JavaScript.</p>
          </div>
          <div className="project-box">
            <img src={Chat} alt="" />
            <span>Real Time Chat Application</span>
            <p>Using Html,CSS,JavaScript,NodeJs,ExpressJs.</p>
          </div>
          <div className="project-box">
            <img src={Game} alt="" />
            <span>Flappy Bird Game</span>
            <p>
              Play Game :{" "}
              <a href="https://wafi2010.github.io/Flappy-Bird-Game/">
                Flappy Bird
              </a>
            </p>
          </div>
          <div className="project-box">
            <img src={Recipe} alt="" />
            <span>Recipe App</span>
            <p>
              Vist To App :{" "}
              <a href="https://wafi2010.github.io/Recipe-App/">Reacipe App</a>
            </p>
          </div>
          <div className="project-box">
            <img src={Password} alt="" />
            <span>Randome Password Ganararor</span>
            <p>Using Html,CSS,JavaScript.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default project;
