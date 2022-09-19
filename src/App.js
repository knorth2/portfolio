
import './App.css';
import About from './components/About.js'
import Nav from './components/Nav.js'
import Portfolio from './components/Portfolio.js';
import Connect from './components/Connect.js';

const App = () => {
  return (
    <>
<Nav />
<div className='render-container'>
  <h1>Kayci North</h1>
  <About />
  
  <Portfolio />
  <Connect />
  </div>
  </>
  );
}

export default App;
