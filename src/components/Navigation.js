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
          <Link to="/about-us"></Link>درباره ما
        </li>

        {/* <li>
          <Link to="/blog">Blog</Link>
        </li> */}
      </ul>

    </nav>
  </header>
 )
}

export default Navigation;