import {Link} from 'react-router-dom'

const Navigation = () => {
 return (
    <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>

        <li>
          <Link to="/blog">About Us</Link>
        </li>
      </ul>

    </nav>
  </header>
 )
}

export default Navigation;