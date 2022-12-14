
import './App.css';
import About from './components/About.js'
import Nav from './components/Nav.js'
import Portfolio from './components/Portfolio.js';
import Connect from './components/Connect.js';
import { Route, Routes, Link } from 'react-router-dom'; 
import Home from './components/Home.js';



const App = () => {
  return (
    <>
<Nav />
<div className='render-container'>
<Link to="/portfolio"><h1>Kayci North</h1></Link>
  <Routes> 
  <Route path='/portfolio' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/connect' element={<Connect />} /> 
  <Route path='/projects' element={<Portfolio />} />
  </Routes>

  </div>
  </>
  );
}

export default App;
