
import Search from '../../img/search-icon.svg';
import Voice from '../../img/voice.svg';

const Header = ({ input, changeInputHandler, getResultHandler}) => {
    return (
        <div className="header">
            <div className="header-logo">
                <span>واژه یابـــــــــ</span>
            </div>
            <div className='header-search_input'>
                <img src={Search} alt="search-icon" />
                <input placeholder='جستجو ...' value={input} type="text" onChange={changeInputHandler} onKeyDown={getResultHandler} />
                <img src={Voice} alt="search-icon" />
            </div>
        </div>
    )
}

export default Header