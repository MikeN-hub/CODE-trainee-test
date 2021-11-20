import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context'
import './Card.css'

const Card = ({ item }) => {
  const { setProfileInfo } = useContext(Context)

  return (
    <div className="Card">
      <div className="Card__avatar" onClick={() => setProfileInfo(item)}>
        <Link to="/profile">
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
