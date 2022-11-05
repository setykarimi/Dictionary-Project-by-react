import { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../img/home.svg';
import AboutUs from '../../img/about-us.svg';
import './sidebar.scss';
import { useLocation } from "react-router-dom";
import HamburgerMenuImg from '../../img/hamburger-menu.svg'



const Sidebar = () => {

  const sampleLocation = useLocation();
  const currentUrl = sampleLocation.pathname;
  const [showSidebar, setShowSidebar] = useState("");

  return (
    <>
      <div className={`sidebar  ${showSidebar === true ? 'activeSidebar' : ''}`}>
        <ul>
          <li>
            <Link to="/Dictionary-Project-by-react/" className={currentUrl == '/Dictionary-Project-by-react/' ? 'sidebar__active-menu' : ''}>
              <img src={Home} alt='home' />
              <span>خانه</span>
            </Link>
          </li>
          <li>
            <Link to="/about-us" className={currentUrl == '/about-us' ? 'sidebar__active-menu' : ''}>
              <img src={AboutUs} alt="about-us" />
              <span>درباره من</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className='menu'>
        <button onClick={() => setShowSidebar(!showSidebar)}>
          <img src={HamburgerMenuImg} alt="setting" />
        </button>
      </div>

    </>
  )
}

export default Sidebar;