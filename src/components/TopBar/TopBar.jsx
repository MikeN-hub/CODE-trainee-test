import './TopBar.css'
import search_icon from '../../assets/icons/search.png'
import sort_icon from '../../assets/icons/sort.png'

const TopBar = () => {
  return (
    <div className="TopBar">
      <div className="title">
        <h1>Поиск</h1>
      </div>
      <div className="searchBar">
        <div className="searchBar-container">
          <div className="search">
            <img src={search_icon} alt="search_icon" />
            <input type="text" placeholder="Введи имя, тег, почту" />
          </div>
          <div className="sort">
            <img src={sort_icon} alt="sort_icon" />
          </div>
        </div>
      </div>
      <div className="tabs">
        <div className="tab-item tab-all">Все</div>
        <div className="tab-item">Desiners</div>
        <div className="tab-item">Analists</div>
        <div className="tab-item">Managers</div>
        <div className="tab-item">IOS</div>
        <div className="tab-item">Android</div>
      </div>
    </div>
  )
}

export default TopBar
