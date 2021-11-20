import { Link } from 'react-router-dom'
import flying_saucer from '../../assets/icons/flying_saucer.png'
import './CritError.css'

const CritError = () => {
  return (
    <div className="CritError">
      <div className="CritError-container">
        <img src={flying_saucer} alt="flying_saucer pic" />
        <div className="CritError-title">Какой-то сверхразум все сломал</div>
        <div className="CritError-text">Постараемся быстро починить</div>
        <div className="CritError-footer"> <Link to='/'>Попробовать снова</Link></div>
      </div>
    </div>
  )
} 

export default CritError
