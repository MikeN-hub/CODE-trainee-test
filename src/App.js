import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { Context } from './context'
import './App.css'
import CriticalError from './components/CriticalError/CriticalError'
import TopBar from './components/TopBar/TopBar'
import Search from './components/Search/Search'
import SearchError from './components/SearchError/SearchError'
import SortSheet from './components/SortSheet/SortSheet'
import Tabs from './components/Tabs/Tabs'
import Main from './components/Main/Main'
import CardList from './components/CardList/CardList'
import Details from './components/Details/Details'

function App() {
  const [data, setData] = useState([])
  const [showCriticalError, setShowCriticalError] = useState(false)
  const [showSearchError, setShowSearchError] = useState(false)
  const [showSortSheet, setShowSortSheet] = useState(false)
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users',
          {
            headers: {
              'Content-Type': 'application/json',
              Prefer: 'code=200, dynamic=true',
            },
          }
        )
        const { items } = await res.data
        setData(items)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const applySearch = (inputText) => {
    const searchedList = data.filter((item) => {
      return (
        item.userTag === inputText.toUpperCase() ||
        item.firstName === inputText[0].toUpperCase() + inputText.slice(1) ||
        item.lastName === inputText[0].toUpperCase() + inputText.slice(1)
      )
    })
    console.log(searchedList)
    if (searchedList.length < 1) {
      setShowSearchError(true)
      console.log('пустой массив')
    } else {
      setData(searchedList)
      console.log('не пустой')
    }
  }

  const applySort = (id) => {
    let sortedList
    if (id === 'alphabet') {
      sortedList = data.slice().sort((a, b) => {
        if (a.lastName < b.lastName) return -1
      })
    } else {
      const today = new Date()
      sortedList = data.slice().sort((a, b) => {
        if (a.birthday < b.birthday) return -1
      })
    }
    console.log(sortedList.map((item) => item.birthday))
    setData(sortedList)
  }

  return (
    <Context.Provider
      value={{
        data,
        setData,
        showCriticalError,
        setShowCriticalError,
        showSearchError,
        setShowSearchError,
        showSortSheet,
        setShowSortSheet,
        itemDetails,
        setItemDetails,
        applySearch,
        applySort,
      }}
    >
      <div className="App">
        <Main>
          <TopBar>
            <Search />
            <Tabs />
          </TopBar>
          {showCriticalError && <CriticalError />}
          {showSearchError && <SearchError />}
          {showSortSheet && <SortSheet />}
          <CardList />
        </Main>
        {/* {showDetails && <Details />} */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/details" element={<Details />}></Route>
        </Routes>
      </div>
    </Context.Provider>
  )
}

export default App
