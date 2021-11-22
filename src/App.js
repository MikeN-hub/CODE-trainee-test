import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Context } from './context'
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
import axios from 'axios'
import CritError from './components/CritError/CritError'
import Plug from './components/Plug'
import Modal from './components/Modal/Modal'
import SearchError from './components/SearchError/SearchError'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [showCritError, setShowCritError] = useState(false)
  const [searchError, setSearchError] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [needToSort, setNeedToSort] = useState(false);
  const [profileInfo, setProfileInfo] = useState({})
  const [inputText, setInputText] = useState('')

  const URL =
    'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users'

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL, {
          headers: {
            'Content-Type': 'application/json',
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

  const sortData = (data, param) => {
    const newData = [...data].sort((a,b) => {
      if (a.lastName < b.lastName) return -1
    })
    return newData
  }

  return (
    <Context.Provider
      value={{
        data,
        setData,
        profileInfo,
        setProfileInfo,
        inputText,
        setInputText,
        showModal,
        setShowModal,
        searchError,
        setSearchError,
        sortData,
        needToSort,
        setNeedToSort
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/plug" element={<Plug />}></Route>
        </Routes>
        {showCritError && <CritError />}
        {searchError && <SearchError />}
        {showModal && <Modal />}
      </div>
    </Context.Provider>
  )
}

export default App
