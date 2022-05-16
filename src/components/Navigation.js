import {Link} from 'react-router-dom';
import Menu from '../img/hamburger-menu.svg';
import Close from '../img/close-icon.svg'

const Navigation = () => {
 return (
    <header>
    <button className='hamburger-menu'><img src={Menu}/></button>
    <nav>
    <button className='close-icon'><img src={Close}/></button>

      <ul>
        <li>
          <Link to="/">خانه</Link>
        </li>
        <li>
          <Link to="/about-us">درباره ما</Link>
        </li>
      </ul>
    </nav>
  </header>
 )
}

export default Navigation;