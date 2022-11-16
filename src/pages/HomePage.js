import '../components/Header/header.scss'
import DatabaseBox from '../components/Database/Database';
import '../styles/home.scss';

const HomePage = ({ input, loading, dehkhoda, amid, moein, motaradef, english, suggestions, similarWordHandler }) => {



  return (
    <>
      <div className='search-term'>
        <span>واژه جستجو شده: </span>
        <input placeholder='واژه مورد نظر خود را جستجو کنید' value={input} disabled />
      </div>

      {suggestions &&
        <div className='similar-words'>
          {suggestions.map((suggest, key) => {
            return (
              <span key={key} onClick={similarWordHandler}>
                {suggest}
              </span>
            )
          })}
        </div>
      }

      <div className='meaning-section'>
        {loading == true && <p style={{ position: 'absolute', top: "50%", left: "50%" }}>loading</p>}
        {dehkhoda.length !== 0 && <DatabaseBox meaning={dehkhoda} databseTitle='دهخدا' />}
        {motaradef.length !== 0 && <DatabaseBox meaning={motaradef} databseTitle='مترادف و متضاد' />}
        {amid.length !== 0 && <DatabaseBox meaning={amid} databseTitle='عمید' />}
        {moein.length !== 0 && <DatabaseBox meaning={moein} databseTitle='معین' />}
        {english.length !== 0 && <DatabaseBox meaning={english} databseTitle='انگلیسی به فارسی' />}
      </div>
    </>
  );
}

export default HomePage