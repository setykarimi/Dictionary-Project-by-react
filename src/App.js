import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Layout from './Layout/Layout'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/Dictionary-Project-by-react/' exact={true} element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App