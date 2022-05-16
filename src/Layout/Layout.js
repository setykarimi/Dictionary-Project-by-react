import Header from "../components/Header"
import Footer from "../components/Footer"
import './layout.scss'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container">
            {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout