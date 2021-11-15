import { useContext } from 'react'
import { Context } from '../../context'
import { Link } from 'react-router-dom'
import back_icon from '../../assets/icons/back_icon.png'
import favorit_icon from '../../assets/icons/favorit_icon.png'
import phone_icon from '../../assets/icons/phone_icon.png'
import './Details.css'

const Details = () => {
  const { itemDetails } = useContext(Context)
  console.log(itemDetails)

  return (
    <div className="Details">
      <div className="container">
        <div className="header">
          <Link to="/">
            <img src={back_icon} alt="back_icon" />
          </Link>
          <div className="main">
            <div className="avatar">
              <img src={itemDetails.avatarUrl} alt="" />
            </div>
            <div className="name">
              {itemDetails.firstName} {itemDetails.lastName}
              <span>{itemDetails.userTag}</span>
            </div>
            <div className="department">{itemDetails.department}</div>
          </div>
          <div className="footer">
            <div className="birthday">
              <img src={favorit_icon} alt="favorit_icon" />
              <p>{itemDetails.birthday}</p>
            </div>
            <div className="phone">
              <img src={phone_icon} alt="phone_icon" />
              <p>{itemDetails.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
