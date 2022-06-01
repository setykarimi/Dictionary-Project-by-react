import Header from "../components/Header"
import Footer from "../components/Footer"

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