import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Context } from './context'
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
import axios from 'axios'
import CritError from './components/CritError/CritError'
import Plug from './components/Plug'
import Modal from './components/Modal/Modal'
import SearchError from './components/SearchError/SearchError'

function App() {
  const [data, setData] = useState([])
  const [changedData, setChangedData] = useState([])
  const [showCritError, setShowCritError] = useState(false)
  const [searchError, setSearchError] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [profileInfo, setProfileInfo] = useState({})
  const [inputText, setInputText] = useState('')

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

  const search = (text) => {
    setChangedData(
      data.filter((item) => {
        return (
          item.lastName.toLowerCase().includes(inputText.toLowerCase()) ||
          item.firstName.toLowerCase().includes(inputText.toLowerCase()) ||
          item.userTag.toLowerCase().includes(inputText.toLowerCase())
        )
      })
    )
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
