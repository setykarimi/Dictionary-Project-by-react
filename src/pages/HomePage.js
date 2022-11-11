import { useEffect, useState } from 'react';
import '../components/Header/header.scss'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import DatabaseBox from '../components/Database/Database';
import '../styles/home.scss';
import { http } from '../services/httpService';

const HomePage = ({ input, loading, resultData }) => {



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