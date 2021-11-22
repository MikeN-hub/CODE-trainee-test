import { useContext } from 'react'
import { Context } from '../../context'
import Card from '../Card/Card'
import './CardList.css'

const CardList = () => {
  const { data, inputText, searchError, setSearchError} = useContext(Context)

  return (
    <div className="CardList">
      {data
        .filter((item) => {
          if (inputText === '') {
            return item
          } else if (
            item.lastName.toLowerCase().includes(inputText.toLowerCase()) ||
            item.firstName.toLowerCase().includes(inputText.toLowerCase()) ||
            item.userTag.toLowerCase().includes(inputText.toLowerCase())
          ) {
            return item
          } else {
            setSearchError(true)
          }
        })
        .map((item) => (
          <Card key={item.id} item={item} />
        ))}
    </div>
  )
}

export default CardList
