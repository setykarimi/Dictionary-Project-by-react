
import Setting from '../../components/Header/Setting';
import Logo from '../../components/Header/Logo';

const Header = ({ children }) => {
    return (
        <div className="header">
            <Logo />
                {children}
                
            <Setting />
        </div>
    )
}

export default Header