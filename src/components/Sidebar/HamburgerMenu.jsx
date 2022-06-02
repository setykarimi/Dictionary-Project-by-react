import HamburgerMenuImg from '../../img/hamburger-menu.svg'
const HamburgerMenu = ({onClickMenu}) => {
    return (
        <>
            <div className='menu'>
                <button onClick={onClickMenu}>
                    <img src={HamburgerMenuImg} alt="setting" />
                </button>
            </div>
        </>
    )
}

export default HamburgerMenu