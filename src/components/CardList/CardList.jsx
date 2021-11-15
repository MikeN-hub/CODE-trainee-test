import { useContext } from 'react'
import { Context } from '../../context'
import Card from '../Card/Card'
import './CardList.css'

const CardList = () => {
  const { data } = useContext(Context)
  return (
    <div className="CardList">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CardList
