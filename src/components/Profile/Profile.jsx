import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context'
import './Profile.css'
import back_icon from '../../assets/icons/back.png'

const Profile = () => {
  const { profileInfo } = useContext(Context)
  console.log(profileInfo)

  return (
    <div className="Profile">
      <div className="navigation-bar">
        <Link to="/">
          <img src={back_icon} alt="back_icon" />
        </Link>
      </div>
      <div className="person-card">
        <div className="avatar">
          <img src={profileInfo.avatarUrl} alt="avatar pic" />
        </div>
        <div className="fullName">
          <span>{profileInfo.firstName}</span>
          <span>{profileInfo.lastName}</span>
          <span>{profileInfo.userTag}</span>
        </div>
        <div className="position">{profileInfo.position}</div>
      </div>
      <div className="person-info"></div>
    </div>
  )
}

export default Profile
