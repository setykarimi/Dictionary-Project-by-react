import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';
import Home from '../../img/home.svg';
import AboutUs from '../../img/about-us.svg';
import HamburgerMenuImg from '../../img/hamburger-menu.svg'




const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState("");

  return (
    <>
      <div className={`sidebar ${showSidebar === true ? 'activeSidebar' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" end className={navData => navData.isActive ? 'sidebar__active-menu' : ""} onClick={() => setShowSidebar(false)}>
              <img src={Home} alt='home' />
              <span>خانه</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={navData => navData.isActive ? 'sidebar__active-menu' : ""} onClick={() => setShowSidebar(false)}>
              <img src={AboutUs} alt="about-us" />
              <span>درباره من</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='menu'>
        <button onClick={() => setShowSidebar(!showSidebar)}>
          <img src={HamburgerMenuImg} alt="menu" />
        </button>
      </div>

    </>
  )
}

export default Sidebar;