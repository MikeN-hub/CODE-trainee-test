import searchGlass_icon from '../../assets/icons/search-glass.png'
import './SearchError.css'

const SearchError = () => {
  return (
    <div className="SearchError">
      <div>
        <img src={searchGlass_icon} alt="searchGlass_icon pic" />
      </div>
      <div className="title">
        Мы никого не нашли
      </div>
      <div className="text">
        Попробуй скорректировать запрос
      </div>
    </div>
  )
}

export default SearchError
