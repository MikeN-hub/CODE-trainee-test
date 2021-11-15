import { useContext, useState } from 'react'
import { Context } from '../../context'
import search_icon from '../../assets/icons/search_icon.png'
import sort_icon from '../../assets/icons/sort_icon.png'
import './Search.css'

const Search = () => {
  const { applySearch, showSortSheet, setShowSortSheet } = useContext(Context)
  const [inputText, setInputText] = useState('')

  const searchHandle = (e) => {
    e.preventDefault()
    if (!inputText) return
    applySearch(inputText.toLowerCase())
  }

  return (
    <div className="Search">
      <form onSubmit={(e) => searchHandle(e)}>
        <div className="searchIcon">
          <img src={search_icon} alt="search_icon" onClick={searchHandle} />
        </div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="Введи имя, тег, почту"
          autoFocus
        />
        <div className="sort_icon">
          <img src={sort_icon} alt="sort_icon" onClick={() => setShowSortSheet(!showSortSheet)}/>
        </div>
      </form>
    </div>
  )
}

export default Search
