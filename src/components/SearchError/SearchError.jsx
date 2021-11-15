import nofind_icon from '../../assets/icons/nofind_icon.png'
import './SearchError.css'

const SearchError = () => {
  return (
    <div className="SearchError">
      <div>
        <img src={nofind_icon} alt="nofind_icon pic" />
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
