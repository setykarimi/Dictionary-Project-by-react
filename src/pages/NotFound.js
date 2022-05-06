import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <>
            <p>404
            <br>
                the page not found
            </br></p>
            <Link to='/'>Go to Home page</Link>
        </>
    )
}

export default NotFound