import { useEffect, useState } from 'react';
import '../components/Header/header.scss'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import DatabaseBox from '../components/Database/Database';
import '../styles/home.scss';
import { http } from '../services/httpService';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [database, setDatabase] = useState('dehkhoda');
  const [suggestions, setSuggestions] = useState([]);
  const databases =
    { dehkhoda: "dehkhoda", amid: "amid", moein: "moein", motaradef: "motaradef", isfahani: "isfahani", en2fa: "en2fa" };
  const [showDatabases, setShowDatabases] = useState(false);
  const [resultData, setResultData] = useState({
    dehkhoda: [],
    amid: [],
    moein: [],
    motaradef: [],
    english: []
  });

  const token = "68284.t5Gzego6SX28dzh71Un3aUZMAM2a0GIY7pkyzNEo";

  useEffect(() => {
    http
      .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${database}`)
      .then((res) => {
        dehkhodaDatabaseHandler();
        amidDatabaseHandler()
        moeinDatabaseHandler()
        motaradefDatabaseHandler();
        englishToPersianHandler()
        // suggestionsHandler()
        // showNewDatabases()
      })
      .catch((err) => console.log(err));
  }, [input])


  const dehkhodaDatabaseHandler = () => {
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${database}`)
      .then((res) => {
        setResultData({...resultData, dehkhoda: res.data.data.results});
      })
      .catch((err) => console.log(err))
  }

  const motaradefDatabaseHandler = () => {
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.motaradef}`)
      .then((res) => {
        setResultData({...resultData, motaradef: res.data.data.results});
      })
      .catch((err) => console.log(err));
  }

  const amidDatabaseHandler = () => {
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.amid}`)
      .then((res) => {
        setResultData({...resultData, amid: res.data.data.results});
      })
      .catch((err) => console.log(err))
  }

  const moeinDatabaseHandler = () => {
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.moein}`)
      .then((res) => {
        setResultData({...resultData, moein: res.data.data.results})
      })
      .catch((err) => console.log(err))
  }

  const englishToPersianHandler = () => {
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.en2fa}`)
      .then((res) => {
        setResultData({...resultData, english: res.data.data.results})
      })
      .catch((err) => console.log(err))
  }

  // const suggestionsHandler = () => {
  //   axios
  //     .get(`http://api.vajehyab.com/v3/suggest?token=${token}&q=${input}`)
  //     .then((res) => {
  //       setSuggestions(res.data.data.suggestion)
  //     })
  //     .catch((err) => { })
  // }



  const changeInputHandler = (e) => {
    setInput(e.target.value)
  }


  const getResultHandler = (e) => {
    if (e.key === 'Enter') {
      dehkhodaDatabaseHandler()
      // amidDatabaseHandler()
      // moeinDatabaseHandler()
      // motaradefDatabaseHandler()
      // suggestionsHandler()
      // showNewDatabases()
      // englishToPersianHandler()
    }
  }

  const showNewDatabases = () => {
    setShowDatabases(!showDatabases)
  }

  const similarWordHandler = (e) => {
    setInput(e.target.innerText)
    dehkhodaDatabaseHandler()
    // amidDatabaseHandler()
    // moeinDatabaseHandler()
    // motaradefDatabaseHandler()
    // englishToPersianHandler()
    // suggestionsHandler()
  }

  return (
    <>
      <Header input={input} changeInputHandler={changeInputHandler} getResultHandler={getResultHandler} />

      <div className='container'>
        <Sidebar />
        <section className='content'>
          <div className='search-term'>
            <span>واژه جستجو شده: </span>
            <input placeholder='واژه مورد نظر خود را جستجو کنید' value={input} disabled />
          </div>

          <div className='similar-words'>
            {suggestions.map((suggest, key) => {
              return (
                <span key={key} onClick={similarWordHandler}>
                  {suggest}
                </span>
              )
            })}
          </div>

          <div className='meaning-section'>
            <DatabaseBox meaning={resultData.dehkhoda} databseTitle='دهخدا' />
            <DatabaseBox meaning={resultData.motaradef} databseTitle='مترادف و متضاد' />
            <DatabaseBox meaning={resultData.amid} databseTitle='عمید' />
            <DatabaseBox meaning={resultData.moein} databseTitle='معین' />
            <DatabaseBox meaning={resultData.english} databseTitle='انگلیسی به فارسی' />
          </div>
        </section>
      </div>
    </>

  );
}

export default HomePage