import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            Home Page
            <Link to="/about-us">About Us</Link>
        </div>)
}

export default HomePage