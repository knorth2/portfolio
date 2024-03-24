import image from '../assets/files/splash.png'
import '../assets/css/Home.css';


const Home = () => {
    return (
      <div className='homeContainer'>
      <div className='about-underline'></div>
      <h3>customer success expert with a background in healthcare</h3>
      <img  className='homeImg' src={image} alt="img of desk"></img>
      
       </div>
      )
      }

      export default Home