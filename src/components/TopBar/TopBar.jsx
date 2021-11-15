import './TopBar.css'

const TopBar = ({children}) => {
  return (
    <div className="TopBar">
      <h2>Поиск</h2>
      {children}
    </div>
  )
}

export default TopBar