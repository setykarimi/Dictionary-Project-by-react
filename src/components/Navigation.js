import {Link} from 'react-router-dom';
import Menu from '../img/hamburger-menu.svg';
import Close from '../img/close-icon.svg'
import { useState } from 'react';

const Navigation = () => {

  const [showMenu , setShowMenu] = useState(false)

  const closeMenuHandler = () => {
    setShowMenu(false)
    console.log('close-menu')
  }

  const showMenuHandler = () => {
    setShowMenu(true)
    console.log('show')
  }

 return (
    <header>
    <button className='hamburger-menu' onClick={showMenuHandler}><img src={Menu}/></button>
    <nav className={showMenu == false ? 'closed' : ''}>
    <button className='close-icon' onClick={closeMenuHandler}><img src={Close}/></button>

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