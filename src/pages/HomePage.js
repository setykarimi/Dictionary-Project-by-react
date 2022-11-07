import { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/Header/header.scss'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import DatabaseBox from '../components/Database/Database';
import '../styles/home.scss';
import { SearchService } from '../services/searchService';
import { http } from '../services/httpService';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [dehkhoda, setDehkhodaDatabase] = useState([])
  const [database, setDatabase] = useState('dehkhoda');
  const [suggestions, setSuggestions] = useState([]);
  const databases =
    { dehkhoda: "dehkhoda", amid: "amid", moein: "moein", motaradef: "motaradef", isfahani: "isfahani", en2fa: "en2fa" };
  const [amidDatabase, setAmidDatabase] = useState([]);
  const [moeinDatabase, setMoeinDatabase] = useState([]);
  const [motaradefDatabase, setMotaradefDatabase] = useState([]);
  const [englishToPersian, setEnglishToPersian] = useState([]);
  const [showDatabases, setShowDatabases] = useState(false);

  const token = "68284.t5Gzego6SX28dzh71Un3aUZMAM2a0GIY7pkyzNEo";

  const dehkhodaDatabaseHandler = () => {

    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.dehkhoda}`)
      .then((res) => {
        setDehkhodaDatabase(res.data.data.results)
      })
      .catch((err) => console.log(err))
  }


  useEffect(() => {
    axios
      .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${database}`)
      .then((res) => {
        dehkhodaDatabaseHandler()
        // amidDatabaseHandler()
        // moeinDatabaseHandler()
        // motaradefDatabaseHandler()
        // suggestionsHandler()
        // showNewDatabases()
        // englishToPersianHandler()
      })
      .catch((err) => console.log(err))
  }, [input])

  // const amidDatabaseHandler = () => {
  //   axios
  //     .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${databases.amid}`)
  //     .then((res) => {
  //       setAmidDatabase(res.data.data.results)
  //     })
  //     .catch((err) => console.log(err))
  // }

  // const moeinDatabaseHandler = () => {
  //   axios
  //     .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${databases.moein}`)
  //     .then((res) => {
  //       setMoeinDatabase(res.data.data.results)
  //     })
  //     .catch((err) => console.log(err))
  // }

  // const motaradefDatabaseHandler = () => {
  //   axios
  //     .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${databases.motaradef}`)
  //     .then((res) => {
  //       setMotaradefDatabase(res.data.data.results)
  //     })
  //     .catch((err) => console.log(err))
  // }

  // const englishToPersianHandler = () => {
  //   axios
  //     .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${databases.en2fa}`)
  //     .then((res) => {
  //       setEnglishToPersian(res.data.data.results)
  //     })
  //     .catch((err) => console.log(err))
  // }

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
            <DatabaseBox meaning={dehkhoda} databseTitle='دهخدا' />
            <DatabaseBox meaning={amidDatabase} databseTitle='عمید' />
            <DatabaseBox meaning={moeinDatabase} databseTitle='معین' />
            <DatabaseBox meaning={motaradefDatabase} databseTitle='مترادف و متضاد' />
            <DatabaseBox meaning={englishToPersian} databseTitle='انگلیسی به فارسی' />
          </div>
        </section>
      </div>
    </>

  );
}

export default HomePage