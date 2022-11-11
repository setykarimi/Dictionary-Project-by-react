import { useEffect, useState } from 'react';
import '../components/Header/header.scss'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import DatabaseBox from '../components/Database/Database';
import '../styles/home.scss';
import { http } from '../services/httpService';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const databases =
    { dehkhoda: "dehkhoda", amid: "amid", moein: "moein", motaradef: "motaradef", en2fa: "en2fa" };
  const [resultData, setResultData] = useState({
    dehkhoda: [],
    amid: [],
    moein: [],
    motaradef: [],
    english: []
  });
  const [loading, setLoading] = useState(false)

  const token = "68284.t5Gzego6SX28dzh71Un3aUZMAM2a0GIY7pkyzNEo";


  const dehkhodaDatabaseHandler = () => {
    setLoading(true)
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.dehkhoda}`)
      .then((res) => {
        console.log('dehkhoda', res.data.data.results);
        setResultData({ ...resultData, dehkhoda: res.data.data.results });
        setLoading(false);
      })
      .catch((err) => {})
  }

  // const motaradefDatabaseHandler = () => {
  //   http
  //     .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.motaradef}`)
  //     .then((res) => {
  //       console.log('motaradef' , res.data);
  //       setResultData({...resultData, motaradef: res.data.data.results});
  //     })
  //     .catch((err) => console.log(err));
  // }

  // const amidDatabaseHandler = () => {
  //   http
  //     .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.amid}`)
  //     .then((res) => {
  //       console.log('amid' , res.data);
  //       setResultData({...resultData, amid: res.data.data.results});
  //     })
  //     .catch((err) => console.log(err))
  // }

  // const moeinDatabaseHandler = () => {
  //   http
  //     .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.moein}`)
  //     .then((res) => {
  //       console.log('moein' , res.data);
  //       setResultData({...resultData, moein: res.data.data.results})
  //     })
  //     .catch((err) => console.log(err))
  // }

  // const englishToPersianHandler = () => {
  //   http
  //     .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.en2fa}`)
  //     .then((res) => {
  //       setResultData({...resultData, english: res.data.data.results})
  //     })
  //     .catch((err) => console.log(err))
  // }

  // const suggestionsHandler = () => {
  //   http
  //     .get(`/suggest?token=${token}&q=${input}`)
  //     .then((res) => {
  //       setSuggestions(res.data.data.suggestion)
  //     })
  //     .catch((err) => { })
  // }



  const changeInputHandler = (e) => {
    setInput(e.target.value);
    
  }





  const getResultHandler = (e) => {
    if (e.key === 'Enter') {
      dehkhodaDatabaseHandler();
    }
  }

  // const showNewDatabases = () => {
  //   setShowDatabases(!showDatabases)
  // }

  // const similarWordHandler = (e) => {
  //   setInput(e.target.innerText)
  //   dehkhodaDatabaseHandler()
  //   amidDatabaseHandler()
  //   moeinDatabaseHandler()
  //   motaradefDatabaseHandler()
  //   englishToPersianHandler()
  //   suggestionsHandler()
  // }

  return (
    <>
      <Header input={input} changeInputHandler={changeInputHandler}
      getResultHandler={getResultHandler}
      />

      <div className='container'>
        <Sidebar />
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
            {loading == true && <p style={{position: 'absolute', top: "50%", left: "50%"}}>loading</p>}
            <DatabaseBox meaning={resultData.dehkhoda} databseTitle='دهخدا' />
            {/* <DatabaseBox meaning={resultData.motaradef} databseTitle='مترادف و متضاد' />
            <DatabaseBox meaning={resultData.amid} databseTitle='عمید' />
            <DatabaseBox meaning={resultData.moein} databseTitle='معین' />
            <DatabaseBox meaning={resultData.english} databseTitle='انگلیسی به فارسی' /> */}
          </div>
        </section>
      </div>
    </>

  );
}

export default HomePage