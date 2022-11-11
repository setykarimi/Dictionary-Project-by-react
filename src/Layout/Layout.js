import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({ children, input, changeInputHandler, getResultHandler }) => {
    return (
        <>
            <Header input={input} changeInputHandler={changeInputHandler} getResultHandler={getResultHandler} />

            <div className='container'>
                <Sidebar />
                <section className='content'>
                {children}
                </section>
            </div>
        </>
    )
}

export default Layout