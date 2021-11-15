import flying_saucer from '../../assets/icons/flying_saucer.png'
import './CriticalError.css'

const CriticalError = () => {
  return (
    <div className="CriticalError">
      <div>
        <img src={flying_saucer} alt="flying_saucer pic" />
      </div>
      <div className="title">Какой-то сверхразум все сломал</div>
      <div className="text">Попробуй скорректировать запрос</div>
      <div className="text-blue">Попробовать снова</div>
    </div>
  )
}

export default CriticalError
