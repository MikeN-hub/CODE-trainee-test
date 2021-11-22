import React, { useContext, useRef } from 'react'
import { Context } from '../../context'
import search_icon from '../../assets/icons/search.png'
import sort_icon from '../../assets/icons/sort.png'
import './TopBar.css'

const TopBar = () => {
  const { inputText, setInputText, showModal, setShowModal } =
    useContext(Context)
  const allRef = useRef()
  const desinersRef = useRef()
  const analistsRef = useRef()
  const managersRef = useRef()
  const iosRef = useRef()
  const androidRef = useRef()
  const tabClickHandle = (e) => {
    allRef.current.classList.remove('active')
    desinersRef.current.classList.remove('active')
    analistsRef.current.classList.remove('active')
    managersRef.current.classList.remove('active')
    iosRef.current.classList.remove('active')
    androidRef.current.classList.remove('active')
    e.target.classList.toggle('active')
  }

  return (
    <div className="TopBar">
      <div className="title">
        <h1>Поиск</h1>
      </div>
      <div className="searchBar">
        <div className="searchBar-container">
          <div className="search">
            <img src={search_icon} alt="search_icon" />
            <input
              type="text"
              placeholder="Введи имя, тег, почту"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              autoFocus
            />
          </div>
          <div className="sort" onClick={() => setShowModal(!showModal)}>
            <img src={sort_icon} alt="sort_icon" />
          </div>
        </div>
      </div>
      <div className="tabs">
        <div className="tab-item active" ref={allRef} onClick={(e) => tabClickHandle(e)}>
          Все
        </div>
        <div
          className="tab-item"
          ref={desinersRef}
          onClick={(e) => tabClickHandle(e)}
        >
          Desiners
        </div>
        <div
          className="tab-item"
          ref={analistsRef}
          onClick={(e) => tabClickHandle(e)}
        >
          Analists
        </div>
        <div
          className="tab-item"
          ref={managersRef}
          onClick={(e) => tabClickHandle(e)}
        >
          Managers
        </div>
        <div
          className="tab-item"
          ref={iosRef}
          onClick={(e) => tabClickHandle(e)}
        >
          IOS
        </div>
        <div
          className="tab-item"
          ref={androidRef}
          onClick={(e) => tabClickHandle(e)}
        >
          Android
        </div>
      </div>
    </div>
  )
}

export default TopBar
