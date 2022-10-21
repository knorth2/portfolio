import '../assets/css/About.css';
import python from '../assets/graphics/skills/python.png'
import sql from '../assets/graphics/skills/sql-server.png'
import postgres from '../assets/graphics/skills/postgres.png'
import flask from '../assets/graphics/skills/flask.png'
import css from '../assets/graphics/skills/css.png'
import express from '../assets/graphics/skills/express.png'
import github from '../assets/graphics/skills/github.png'
import git from '../assets/graphics/skills/git.png'
import html from '../assets/graphics/skills/html.png'
import javascript from '../assets/graphics/skills/javascript.png'
import mongodb from '../assets/graphics/skills/mongodb.png'
import mongoose from '../assets/graphics/skills/mongoose.png'
import node from '../assets/graphics/skills/node.png'
import reactrouter from '../assets/graphics/skills/react-router.png'
import react from '../assets/graphics/skills/react.png'


const About = (props) => {
    return(
<div className='about'>
<h3>About</h3>
<div className='about-underline'></div>
<div className='about-container'>
<p>Hi! I'm Kayci, a full-stack software engineer who really loves organization and a good challenge. <br></br>
Strong skills in problem solving and critical thinking. <br></br>
15 years of professional expertise specializing in detail 🤓<br></br>
Over a decade of leadership experience</p>
</div>
<h4>Skills</h4>

<div className='skills-container'>
<div className='skill-icon'>
            <img alt='python' src={python}></img>
            <p>Python</p>
          </div>
          <div className='skill-icon'>
            <img alt='sql' src={sql}></img>
            <p>SQL</p>
          </div>
          <div className='skill-icon'>
            <img alt='postgres' src={postgres}></img>
            <p>Postgres</p>
          </div>
          <div className='skill-icon'>
            <img alt='flask' src={flask}></img>
            <p>Flask</p>
          </div>
<div className='skill-icon'>
            <img alt='html' src={html}></img>
            <p>HTML</p>
          </div>
          <div className='skill-icon'>
            <img alt='css' src={css}></img>
            <p>CSS</p>
          </div>
          <div className='skill-icon'>
            <img alt='javascript' src={javascript}></img>
            <p>JavaScript</p>
          </div>
          <div className='skill-icon'>
            <img alt='react' src={react}></img>
            <p>React</p>
          </div>
          <div className='skill-icon'>
            <img alt='react router' src={reactrouter}></img>
            <p>React Router</p>
          </div>
          <div className='skill-icon'>
            <img alt='node.js' src={node}></img>
            <p>Node.js</p>
          </div>
          <div className='skill-icon'>
            <img alt='express' src={express}></img>
            <p>Express</p>
          </div>
          <div className='skill-icon'>
            <img alt='mongo d b' src={mongoose}></img>
            <p>Mongooose</p>
          </div>
          <div className='skill-icon'>
            <img alt='mongo d b' src={mongodb}></img>
            <p>MongoDB</p>
          </div>
          <div className='skill-icon'>
            <img alt='git' src={git}></img>
            <p>Git</p>
          </div>
          <div className='skill-icon'>
            <img alt='github' src={github}></img>
            <p>GitHub</p>
          </div>
          
</div>
</div>

    )
}

export default About    