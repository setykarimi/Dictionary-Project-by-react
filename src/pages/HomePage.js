import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../img/search-icon.svg';
import Voice from '../img/voice.svg';
import '../components/Header/header.scss'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [meaning, setMeaning] = useState([])
  const [database, setDatabase] = useState('dehkhoda');
  const [suggestions, setSuggestions] = useState([]);
  const databases =
    { dehkhoda: "dehkhoda", amid: "amid", moein: "moein", motaradef: "motaradef", isfahani: "isfahani" };
  const [amidDatabase, setAmidDatabase] = useState([])
  const [moeinDatabase, setMoeinDatabase] = useState([])
  const [motaradefDatabase, setMotaradefDatabase] = useState([])
  const [isfahaniDatabase, setIsfahaniDatabase] = useState([])
  const [showDatabases, setShowDatabases] = useState(false)

  const token = "68283.WF5AdpjT2PSP12ePMldnNyuByZJ6kdGXsuerEhjd"

  const setMeaningHandler = () => {
    axios
      .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${database}`)
      .then((res) => {
        setMeaning(res.data.data.results)
      })
      .catch((err) => console.log(err))
  }


  useEffect(() => {
    axios
      .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${database}`)
      .then((res) => {
        setMeaning(res.data.data.results)
      })
      .catch((err) => console.log(err))
  }, [database])

  const amidDatabaseHandler = () => {
    axios
      .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${databases.amid}`)
      .then((res) => {
        console.log(res.data.data.results)
        setAmidDatabase(res.data.data.results)
      })
      .catch((err) => console.log(err))
  }

  const moeinDatabaseHandler = () => {
    axios
      .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${databases.moein}`)
      .then((res) => {
        console.log(res.data.data.results)
        setMoeinDatabase(res.data.data.results)
      })
      .catch((err) => console.log(err))
  }

  const motaradefDatabaseHandler = () => {
    axios
      .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${databases.motaradef}`)
      .then((res) => {
        console.log(res.data.data.results)
        setMotaradefDatabase(res.data.data.results)
      })
      .catch((err) => console.log(err))
  }

  const suggestionsHandler = () => {
    axios
      .get(`http://api.vajehyab.com/v3/suggest?token=${token}&q=${input}`)
      .then((res) => {
        console.log("suggestion", res.data.data.suggestion)
        setSuggestions(res.data.data.suggestion)
      })
      .catch((err) => { })
  }

  const isfahaniDatabaseHandler = () => {
    axios
      .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${databases.isfahani}`)
      .then((res) => {
        console.log(res.data.data.results)
        setIsfahaniDatabase(res.data.data.results)
      })
      .catch((err) => console.log(err))
  }


  const changeInputHandler = (e) => {
    setInput(e.target.value)

  }

  const changDatabaseHandler = (e) => {
    isfahaniDatabaseHandler()
  }

  const getResultHandler = (e) => {
    if (e.key === 'Enter') {
      setMeaningHandler()
      amidDatabaseHandler()
      moeinDatabaseHandler()
      motaradefDatabaseHandler()
      suggestionsHandler()
      showNewDatabases()
    }
  }

  const showNewDatabases = () => {
    setShowDatabases(!showDatabases)
  }

  return (
    <>

      <Header>
        <div className='header-search_input'>
          <img src={Search} alt="search-icon" />
          <input placeholder='جستجو ...' value={input} type="text" onChange={changeInputHandler} onKeyDown={getResultHandler} />
          <img src={Voice} alt="search-icon" />
        </div>
      </Header>


      <div className='container'>
        <Sidebar />



        <section className='content'>

        <div className='similar-words'>
              {suggestions && suggestions.length !== 0 ?<div className=''><h3 className='text-center'>واژگان مشابه</h3> </div>: ''}
              {suggestions.map((suggest, key) => {
                return (
                  
                    <span key={key}>
                      {suggest},  
                    </span>
                  
                )
              })}
            </div>
          <div className='meaning-section'>

        

            <div className='meaning-section__box'>
              {meaning && meaning.length !== 0 ?<div className='meaning-section__box-title'><span>لغت نامه: </span> <h3 className='database-title'>دهخدا</h3></div> : ''}
              {meaning.map((item, key) => {
                return (
                  <p key={key}>
                    {item.text}
                  </p>
                )
              })}
            </div>


            <div className='meaning-section__box'>
              {amidDatabase && amidDatabase.length !== 0 ?<div className='meaning-section__box-title'><span>لغت نامه: </span>  <h3 className='database-title'>عمید</h3></div> : ''}
              {amidDatabase.map((item, key) => {
                return (

                  <div key={key}>
                    <span>تلفظ {item.pron}</span>
                    <p>
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className='meaning-section__box'>
              {moeinDatabase && moeinDatabase.length !== 0 ? <div className='meaning-section__box-title'><span>لغت نامه: </span> <h3 className='database-title'>معین</h3> </div>: ''}
              {moeinDatabase.map((item, key) => {
                return (
                  <div key={key}>
                    <p>
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className='meaning-section__box'>
              {motaradefDatabase && motaradefDatabase.length !== 0 ? <div className='meaning-section__box-title'><span>لغت نامه: </span> <h3 className='database-title'>واژگان مترادف و متضاد</h3></div> : ''}
              {motaradefDatabase.map((item, key) => {
                return (
                  <div key={key}>
                    <p>
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>

           

          </div>
        </section>
      </div>
    </>

  );
}

export default HomePage