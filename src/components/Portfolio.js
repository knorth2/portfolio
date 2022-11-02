import "../assets/css/Portfolio.css";
import memory from "../assets/files/memory_game.png";
import mindful from "../assets/files/mindful.png";
import hh from "../assets/files/happy-hound2.png";
import { useState } from "react";

const Portfolio = () => {
  const [showMemory, setShowMemory] = useState(false);
  const [showMindful, setShowMindful] = useState(false);
  const [showHappy, setShowHappy] = useState(false);
  return (
    <div id="portfolio" className="portfolio">
      <h3>Projects</h3>
      <div className="portfolio-underline"></div>
      <div className="portfolio-container">
        <div
          className="portfolio-box"
          onMouseLeave={() => setShowMemory(false)}
        >
          
          <img
            onClick={() => setShowMemory(true)}
            alt="ski weather site"
            src={memory}
          ></img>

          {showMemory && (
            <div className="dropdown">
              <div className="section-line"></div>
              <p>
                Time to test your mental strength with the classic two-person memory game,
                Concentration.
              </p>
              <div className="code-list">
                <p>HTML</p>
                <p>CSS</p>
                <p>Vanilla Javascript</p>
                <a
                  href="https://knorth2.github.io/Project_1_Memory_Game/"
                  target="_blank"
                  rel="noreferrer"
                >
                  view site
                </a>
                <a
                  href="https://github.com/knorth2/Project_1_Memory_Game"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
              </div>
              <div className="section-line"></div>
            </div>
          )}
          <h5 onClick={() => setShowMemory(true)}>Memory Game</h5>
        </div>

        <div
          className="portfolio-box"
          onMouseLeave={() => setShowMindful(false)}
        >
          
          <img
            onClick={() => setShowMindful(true)}
            alt="ski weather site"
            src={mindful}
          ></img>

          {showMindful && (
            <div className="dropdown">
              <div className="section-line"></div>
              <p>
                Mindful is a daily journal entry app that tracks activity and
                mindfulness to hopefully redirect your thoughts on a more
                positive path.
              </p>
              <div className="code-list">
                <p>Node.js</p>
                <p>Mongoose</p>
                <p>Express</p>
                <p>EJS with 7 RESTful routes and full CRUD</p>
                <a
                  href="https://mindful-deploy-app.herokuapp.com/mindful"
                  target="_blank"
                  rel="noreferrer"
                >
                  view site
                </a>
                <a
                  href="https://github.com/knorth2/project_2_Mindful"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
              </div>
              <div className="section-line"></div>
            </div>
          )}
          <h5 onClick={() => setShowMindful(true)}>Memory Game</h5>
        </div>

        <div className="portfolio-box" onMouseLeave={() => setShowHappy(false)}>
          
          <img
            onClick={() => setShowHappy(true)}
            alt="ski weather site"
            src={hh}
          ></img>

          {showHappy && (
            <div className="dropdown">
              <div className="section-line"></div>
              <p>
                De-Coupled MERN stack: As group lead, I organized and delegated
                tasks to fellow colleagues. I built the entire backend utilizing
                full CRUD functionality. 
              </p>
              <div className="code-list">
                <p>Mongoose</p>
                <p>Express</p>
                <p>React</p>
                <p>Node.js</p>
                <a
                  href="https://happy-hound-react-app.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  view site
                </a>
                <a
                  href="https://github.com/mdawood832/Happy-Hound-Front-End"
                  target="_blank"
                  rel="noreferrer"
                >
                  github frontend
                </a>
                <a
                  href="https://github.com/mdawood832/Happy-Hound-Back-End"
                  target="_blank"
                  rel="noreferrer"
                >
                  github backend
                </a>
              </div>
              <div className="section-line"></div>
            </div>
          )}
          <h5 onClick={() => setShowHappy(true)}>Memory Game</h5>
        </div>

        
      </div>
    </div>
  );
};

export default Portfolio;
