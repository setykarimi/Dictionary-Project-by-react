import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Layout from './Layout/Layout';
import NotFound from './pages/NotFound';
import { useState } from 'react';
import { http } from './services/httpService';


function App() {
  // States
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



  // Input Functions
  const changeInputHandler = (e) => {
    setInput(e.target.value);
  }

  const getResultHandler = (e) => {
    if (e.key === 'Enter') {
      dehkhodaDatabaseHandler();
      motaradefDatabaseHandler();
      amidDatabaseHandler();
      moeinDatabaseHandler();
      englishToPersianHandler();
    }
  }



  const dehkhodaDatabaseHandler = () => {
    setLoading(true)
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.dehkhoda}`)
      .then((res) => {
        console.log('dehkhoda', res.data.data.results);
        setResultData({ ...resultData, dehkhoda: res.data.data.results });
        setLoading(false);
      })
      .catch((err) => { })
  }


  const motaradefDatabaseHandler = () => {
    setLoading(true)
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.motaradef}`)
      .then((res) => {
        console.log('motaradef', res.data.data.results);
        setResultData({ ...resultData, motaradef: res.data.data.results });
        setLoading(false);
      })
      .catch((err) => { })
  }

  const amidDatabaseHandler = () => {
    setLoading(true)
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.amid}`)
      .then((res) => {
        console.log('amid', res.data.data.results);
        setResultData({ ...resultData, amid: res.data.data.results });
        setLoading(false);
      })
      .catch((err) => { })
  }

  const moeinDatabaseHandler = () => {
    setLoading(true)
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.moein}`)
      .then((res) => {
        console.log('moein', res.data.data.results);
        setResultData({ ...resultData, moein: res.data.data.results });
        setLoading(false);
      })
      .catch((err) => { })
  }

  const englishToPersianHandler = () => {
    setLoading(true)
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.english}`)
      .then((res) => {
        console.log('english', res.data.data.results);
        setResultData({ ...resultData, english: res.data.data.results });
        setLoading(false);
      })
      .catch((err) => { })
  }

  const suggestionsHandler = () => {
    http
      .get(`/suggest?token=${token}&q=${input}`)
      .then((res) => {
        setSuggestions(res.data.data.suggestion)
      })
      .catch((err) => { })
  }




  return (
    <>
      <Layout input={input} changeInputHandler={changeInputHandler} getResultHandler={getResultHandler}>
        <Routes>
          <Route path='/' element={<HomePage input={input} loading={loading} resultData={resultData} />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App