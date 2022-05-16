import {Link} from 'react-router-dom';

const Navigation = () => {
 return (
    <header>
    <nav>
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