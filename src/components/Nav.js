import '../assets/css/Nav.css';
import { HashLink  } from 'react-router-hash-link';

const Nav = () => {
    return(
        <div className='nav'>
        
  <HashLink smooth to='/#about'>about</HashLink>

        </div>
    )
}

export default Nav