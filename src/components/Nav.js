import '../assets/css/Nav.css';
import { HashLink } from 'react-router-hash-link';

const Nav = (props) => {
    return(
        <div className='nav'>
        
  <HashLink smooth to='/#connect'>Connect</HashLink>

        </div>
    )
}

export default Nav