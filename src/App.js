import {Route , Routes , Link} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'

function App () {
return (
  <>
  <header>
    <nav>
    <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/about-us">About Us</Link>
            </li>
    </ul>
      
    </nav>
  </header>
  <Routes>
    <Route path='/' exact={true} element={<HomePage/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
  </Routes>
  </>
)
}

export default App