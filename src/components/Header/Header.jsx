
import Logo from '../../components/Header/Logo';

const Header = ({ children }) => {
    return (
        <div className="header">
            <Logo />
                {children}  
        </div>
    )
}

export default Header