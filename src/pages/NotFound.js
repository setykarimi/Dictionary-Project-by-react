import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"

const NotFound = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <Sidebar />
                <div className="not-found">
                   <p> صفحه مورد نظر شما یافت نشد.</p>
                </div>
            </div>
        </>
    )
}

export default NotFound