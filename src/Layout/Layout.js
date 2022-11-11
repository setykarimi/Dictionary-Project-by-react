import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({ children, input, changeInputHandler, getResultHandler }) => {
    return (
        <>
            <Header input={input} changeInputHandler={changeInputHandler} getResultHandler={getResultHandler} />

            <div className='container'>
                <Sidebar />
                {children}
            </div>
        </>
    )
}

export default Layout