import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Context } from './context'
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
import axios from 'axios'
// import TopBar from './components/TopBar/TopBar'
// import CardList from './components/CardList/CardList'
import CritError from './components/CritError/CritError'
import Plug from './components/Plug'

function App() {
  const [data, setData] = useState([])
  const [showMain, setShowMain] = useState(true)
  const [showCritError, setShowCritError] = useState(false)
  const [profileInfo, setProfileInfo] = useState({});

  const URL =
    'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users'

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL, {
          params: {
            'Content-Type': 'Application/json',
            Prefer: 'code=200, dynamic=true',
          },
        })
        const { items } = await res.data
        setData(items)
        
      } catch (error) {
        console.log(error)
        setShowCritError(true)
      }
    }

    getData()
  }, [])

  // const getProfileInfo = (info) => {
  //   setProfileInfo(info)
  // }

  return (
    <Context.Provider value={{ data, profileInfo, setProfileInfo }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/plug" element={<Plug />}></Route>
        </Routes>
        {/* <Main /> */}
        {showCritError && <CritError />}
      </div>
    </Context.Provider>
  )
}

export default App
