import "../assets/css/Portfolio.css";
import memory from "../assets/files/memory_game.png";
import mindful from "../assets/files/mindful.png";

const Portfolio = () => {
  return (
    <>
    {/* <div className="portfolio-container"> */}
      <h3 className="portfolioh3">Projects</h3>
      {/* </div> */}
      {/* <div className="portfolio-underline"></div> */}
      <div className="project_wrapper">
        <a href="https://knorth2.github.io/Project_1_Memory_Game/" target="_blank"><img className="projectImg" src={memory} alt="img of project"></img></a>
        <div className="project_description">
        <h4 className="proj_description_title">Memory Game</h4>
        <h5 className="tech_used">HTML, CSS & JavaScript</h5>
        <p className="proj_description_p">
          Time to test your mental strength with the classic memory game,
          Concentration. This is a two-person memory game that I created and
          styled using HTML, CSS and Vanilla Javascript.
        </p>
        </div>
        

        <a href="https://mindful-deploy-app.herokuapp.com/mindful" target="_blank"><img className="projectImg" src={mindful} alt="img of project"></img></a>
        <div className="project_description">
        <h4 className="proj_description_title">Mindful</h4>
        <h5 className="tech_used">
          Node.js, Mongoose, Express, EJS with 7 RESTful routes and full CRUD
        </h5>
        <p className="proj_description_p">
          Mindful is a daily journal entry app that tracks activity and
          mindfulness to hopefully redirect your thoughts on a more positive
          path.
        </p>
        </div>
      </div>
      </>
  );
};

export default Portfolio;