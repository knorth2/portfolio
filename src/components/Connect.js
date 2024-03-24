import "../assets/css/Connect.css";
import email from "../assets/graphics/email.png";
import github from "../assets/graphics/github2.png";
import linkedin from "../assets/graphics/linkedin.png";
import resume from "../assets/files/Kayci_North_resume_2024.pdf";

const Connect = () => {
  return (
    <div className="connect">
      <h3>Connect</h3>
      <div className="connect-underline"></div>
      <p>I am a customer success expert with hands-on experience in a SaaS startup. 
 </p>
 
 <p>I am seeking a dynamic job that cultivates creative problem-solving, organization and helping others find solutions to problems.</p>
      <div className="connectContainer">
        <div className="connect-links">
          <span>kayci.north@gmail.com</span>
          <img alt="email icon" src={email}></img>
        </div>
        <div className="connect-links">
          <a href="https://github.com/knorth2" target="_blank" rel="noreferrer">
            github.com/knorth2
          </a>
          <a href="https://github.com/knorth2" target="_blank" rel="noreferrer">
            <img alt="github icon" src={github}></img>
          </a>
        </div>
        <div className="connect-links">
          <a
            href="https://www.linkedin.com/in/kayci-north/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/kayci-north
          </a>
          <a
            href="https://www.linkedin.com/in/kayci-north/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="linkedin icon" src={linkedin}></img>
          </a>
        </div>
        <div className="connect-links">
          <a 
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            id="resume-button"
          >
            resume
          </a>
        </div>
      </div>
    </div>
  );
};
export default Connect;
