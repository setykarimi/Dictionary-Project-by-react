import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../img/search-icon.svg'

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
    }
  }

  return (
    <>
      <div className='search_input'>
        <input placeholder='جستجو واژه مورد نظر' value={input} type="text" onChange={changeInputHandler} onKeyDown={getResultHandler} />
        <img src={Search} alt="search-icon" />
      </div>


<section className='meaning-section'>

      {meaning && meaning.length !== 0 ? <h3 className='database-title'>دهخدا</h3> : ''}
      {meaning.map((item, key) => {
        return (
          <span key={key}>
            {item.text}
          </span>
        )
      })}


      {amidDatabase && amidDatabase.length !== 0 ? <h3 className='database-title'>عمید</h3> : ''}
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


      {moeinDatabase && moeinDatabase.length !== 0 ? <h3 className='database-title'>معین</h3> : ''}
      {moeinDatabase.map((item, key) => {
        return (
          <div key={key}>
            <p>
             {item.text}
             </p>
          </div>
        )
      })}

      {motaradefDatabase && motaradefDatabase.length !== 0 ? <h3 className='database-title'>واژگان مترادف و متضاد</h3> : ''}
      {motaradefDatabase.map((item, key) => {
        return (
          <div key={key}>
            <p>
             {item.text}
             </p>
          </div>
        )
      })}


      {suggestions && suggestions.length !== 0 ? <h3 className='text-center'>واژگان مشابه</h3> : ''}
      {suggestions.map((suggest, key) => {
        return (
          <div key={key}>
            <span>
             {suggest}, 
             </span>
          </div>
        )
      })}
      </section>
    </>
    
  );
}

export default HomePage