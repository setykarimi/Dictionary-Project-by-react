import {Link} from 'react-router-dom';
import Home from '../../img/home.svg'
import AboutUs from '../../img/about-us.svg'
import './sidebar.scss'

const Sidebar = () => {

  

 return (
    <>
   <div className='sidebar'>
      <ul>
        <li >
          <Link to="/" className='sidebar__active-menu'>
          <img src={Home} alt='home'/>
          <span>خانه</span>
          </Link>
        </li>
        <li>
          <Link to="/about-us" >
          <img src={AboutUs} alt="about-us"/>
          <span>درباره ما</span>
          </Link>
        </li>
      </ul>
      </div>
   
  </>
 )
}

export default Sidebar;