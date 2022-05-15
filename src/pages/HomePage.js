import { useEffect, useState } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [input, setInput] = useState('');
  const [meaning, setMeaning] = useState([])
  const [database, setDatabase] = useState('dehkhoda');
  const [suggestions, setSuggestions] = useState('آسمان');

  const token = "68283.WF5AdpjT2PSP12ePMldnNyuByZJ6kdGXsuerEhjd"

  const setSuggestionHandler = () => {
    axios
      .get(`http://api.vajehyab.com/v3/search?token=${token}&q=${input}&type=exact&filter=${database}`)
      // .get(`http://api.vajehyab.com/v3/suggest?token=${token}&q=${input}`)
      .then((res) => {
        setMeaning(res.data.data.results)
        // console.log(res);
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


  const changeInputHandler = (e) => {
    setInput(e.target.value)
    axios
      .get(`http://api.vajehyab.com/v3/suggest?token=${token}&q=${input}`)
      .then((res) => {
        console.log(res.data.data.suggestion);
        setSuggestions(res.data.data.suggestion)
      })
      .catch((err) => console.log(err))
  }

  const changDatabaseHandler = (e) => {
    setDatabase(e.target.value)
    setSuggestionHandler()
  }

  const getResultHandler = () => {
    setSuggestionHandler()
  }

  return (
    <div className="App">

      <div>
        <button onClick={changDatabaseHandler} value="dehkhoda">دهخدا</button>
        <button onClick={changDatabaseHandler} value="moein">معین</button>

      </div>

      <input value={input} type="text" list="data" onChange={changeInputHandler} />
      <datalist id="data">
      
      {/* {suggestions? suggestions.map((item , key) => {
      return  <option key={key} value={item} />
      }) : ''} */}
      </datalist>

      <button onClick={getResultHandler}>search</button>
      <span>{meaning.map((item , key) => {
        return (
        <span key={key}>
        {item.text}
        </span>
        )
      })}</span>
    </div>
  );
}

export default HomePage