import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context'
import './Profile.css'
import back_icon from '../../assets/icons/back.png'
import favorite_icon from '../../assets/icons/favorite.png'
import phone_icon from '../../assets/icons/phone.png'

const Profile = () => {
  const { profileInfo } = useContext(Context)
  const birthday = new Date(profileInfo.birthday)
  const birthdayToDisplay = birthday.toLocaleDateString('ru-RU', {day: 'numeric', month: 'long', year: 'numeric'}).slice(0, -2)
  const phone = `+7 (${profileInfo.phone.slice(0,3)})${profileInfo.phone.slice(3)}`.replace(/-/g, ' ')
  const getAge = (birthday) => {
    const now = new Date()
    const addOne = now.getMonth() - birthday.getMonth() >= 0 && now.getDate() - birthday.getDate() >= 0
    const diff = now.getFullYear() - birthday.getFullYear()
    return diff - 1 + (addOne ? 1 : 0)
  }

  const age = `${getAge(birthday)} ${(getAge(birthday) > 4 ? 'лет' : 'года')}`

  return (
    <div className="Profile">
      <header>
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
            <div>
              {profileInfo.firstName} {profileInfo.lastName}
            </div>
            <div>{profileInfo.userTag}</div>
          </div>
          <div className="position">{profileInfo.position}</div>
        </div>
      </header>
      <main>
        <div className="person-info">
          <div className="date">
            <div className="birthday">
              <div>
                <img src={favorite_icon} alt="favorite_icon pic" />
              </div>
              <div>{birthdayToDisplay}</div>
            </div>
            <div className="age">{age}</div>
          </div>
          <div className="phone">
            <div>
              <img src={phone_icon} alt="phone_icon pic" />
            </div>
            <div>{phone}</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile
