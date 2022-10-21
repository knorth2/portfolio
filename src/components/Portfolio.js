import "../assets/css/Portfolio.css";
import memory from "../assets/files/memory_game.png";
import mindful from "../assets/files/mindful.png";
import hh from "../assets/files/happy-hound2.png";

const Portfolio = () => {
  return (
    
    <div className="portfolio-container">
      <h3 className="portfolioh3">Projects</h3>
     
      <div className="portfolio-underline"></div>
      <div className="project_wrapper">
        <a href="https://knorth2.github.io/Project_1_Memory_Game/" target="_blank"><img className="projectImg" src={memory} alt="img of project"></img></a>
        <div className="project_description">
        <h4 className="proj_description_title">Memory Game</h4>
        <h5 className="tech_used">HTML, CSS & JavaScript</h5>
        <p className="proj_description_p">
        Time to test your mental strength with the classic memory game,
          Concentration. This is a two-person game. 
          <br></br> 
          <br></br> 
          <a href='https://github.com/knorth2/Project_1_Memory_Game' target="_blank">Repository</a> 
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
          <br></br>
          <br></br> 
          <a href='https://github.com/knorth2/project_2_Mindful' target="_blank">Repository</a> 
        </p>
        </div>


        <a href="https://happy-hound-react-app.herokuapp.com/" target="_blank"><img className="projectImg" src={hh} alt="img of project"></img></a>
        <div className="project_description">
        <h4 className="proj_description_title">Happy Hound - Group project</h4>
        <h5 className="tech_used">
        De-coupled MERN Stack: Mongoose, Express, React and Node.js with full CRUD 
        </h5>
        <p className="proj_description_p">
          Happy Hound is an e-commerce store specializing in high-end dog accessaries. 
          <br></br>
          As group lead, I organized and delegated tasks to fellow colleagues. I built the entire backend utilizing full CRUD functionality. 
          <br></br>
         Using react, I rendered it on the front end as well.  
         <br></br>
         <br></br> 
        <a href='https://github.com/mdawood832/Happy-Hound-Back-End' target="_blank">Back-end repository/</a> 
        <a href='https://github.com/mdawood832/Happy-Hound-Front-End' target="_blank">Front-end repository</a> 
        </p>
        </div>
      </div>
       </div>
     
  );
};

export default Portfolio;
