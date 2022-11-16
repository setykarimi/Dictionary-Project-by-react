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
  const databases = { dehkhoda: "dehkhoda", amid: "amid", moein: "moein", motaradef: "motaradef", en2fa: "en2fa" };
  const [dehkhoda, setDehkhoda] = useState([]);
  const [amid, setAmid] = useState([]);
  const [moein, setMoien] = useState([]);
  const [motaradef, setMotaradef] = useState([]);
  const [english, setEnglish] = useState([]);
  const [loading, setLoading] = useState(false)
  const token = "68284.t5Gzego6SX28dzh71Un3aUZMAM2a0GIY7pkyzNEo";



  // Input Functions
  const changeInputHandler = (e) => {
    setInput(e.target.value);
  }

  const getResultHandler = (e) => {

    if (e.key === 'Enter') {
      if (dehkhoda.length !== 0 || english.length !== 0 || moein.length !== 0) {
        setDehkhoda([]);
        setAmid([]);
        setMotaradef([]);
        setEnglish([]);
        setMoien([])
        setSuggestions([])
      }
      else {
        dehkhodaDatabaseHandler();
        motaradefDatabaseHandler();
        amidDatabaseHandler();
        moeinDatabaseHandler();
        englishToPersianHandler();
        suggestionsHandler()
      }
    }
  }

  const dehkhodaDatabaseHandler = () => {
    setLoading(true)
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.dehkhoda}`)
      .then((res) => {
        setDehkhoda(res.data.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err.message))
  }

  const amidDatabaseHandler = () => {
    setLoading(true)
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.amid}`)
      .then((res) => {
        setAmid(res.data.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err.message))
  }

  const motaradefDatabaseHandler = () => {
    setLoading(true)
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.motaradef}`)
      .then((res) => {
        setMotaradef(res.data.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err.message))
  }

  const moeinDatabaseHandler = () => {
    setLoading(true)
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.moein}`)
      .then((res) => {
        setMoien(res.data.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err.message))
  }

  const englishToPersianHandler = () => {
    setLoading(true)
    http
      .get(`/search?token=${token}&q=${input}&type=exact&filter=${databases.english}`)
      .then((res) => {
        setEnglish(res.data.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err.message))
  }

  const suggestionsHandler = () => {
    http
      .get(`/suggest?token=${token}&q=${input}`)
      .then((res) => {
        setSuggestions(res.data.data.suggestion)
      })
      .catch((err) => { })
  }

  const similarWordHandler = (e) => {
    setInput(e.target.innerText)
    dehkhodaDatabaseHandler()
    amidDatabaseHandler()
    moeinDatabaseHandler()
    motaradefDatabaseHandler()
    englishToPersianHandler()
    suggestionsHandler()
  }


  return (
    <Layout input={input} changeInputHandler={changeInputHandler} getResultHandler={getResultHandler}>
      <Routes>
        <Route path='/' element={<HomePage input={input} loading={loading} dehkhoda={dehkhoda} amid={amid} moein={moein} motaradef={motaradef} english={english} similarWordHandler={similarWordHandler} suggestions={suggestions} />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App