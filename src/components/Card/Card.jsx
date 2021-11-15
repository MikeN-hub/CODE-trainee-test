import { useContext } from 'react'
import { Context } from '../../context'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ item }) => {
  const { setItemDetails } = useContext(Context)

  return (
    <div className="Card">
      <div className="Card__avatar" onClick={() => setItemDetails(item)}>
        <Link to="/details">
          <img src={item.avatarUrl} alt="avatar pic" />
        </Link>
      </div>
      <div className="Card__title">
        <p>
          {item.firstName} {item.lastName} <span>{item.userTag}</span>
        </p>
        <p>{item.position}</p>
      </div>
    </div>
  )
}

export default Card
