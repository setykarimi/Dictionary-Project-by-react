import '../components/Header/header.scss'
import DatabaseBox from '../components/Database/Database';
import '../styles/home.scss';

const HomePage = ({ input, loading, resultData }) => {

  return (
    <>

      <section className='content'>
        <div className='search-term'>
          <span>واژه جستجو شده: </span>
          <input placeholder='واژه مورد نظر خود را جستجو کنید' value={input} disabled />
        </div>

        {/* <div className='similar-words'>
            {suggestions.map((suggest, key) => {
              return (
                <span key={key} onClick={similarWordHandler}>
                  {suggest}
                </span>
              )
            })}
          </div> */}

        <div className='meaning-section'>
          {loading == true && <p style={{ position: 'absolute', top: "50%", left: "50%" }}>loading</p>}
          {resultData.dehkhoda.length !== 0 && <DatabaseBox meaning={resultData.dehkhoda} databseTitle='دهخدا' />}
          {resultData.motaradef.length !== 0 && <DatabaseBox meaning={resultData.motaradef} databseTitle='مترادف و متضاد' />}
          {resultData.amid.length !== 0 && <DatabaseBox meaning={resultData.amid} databseTitle='عمید' />}
          {resultData.moein.length !== 0 && <DatabaseBox meaning={resultData.moein} databseTitle='معین' />}
          {resultData.english.length !== 0 && <DatabaseBox meaning={resultData.english} databseTitle='انگلیسی به فارسی' />}
        </div>
      </section>

    </>

  );
}

export default HomePage