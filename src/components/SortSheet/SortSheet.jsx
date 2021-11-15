import React, { useState, useContext } from 'react'
import { Context } from '../../context'
import cancel_icon_16 from '../../assets/icons/cancel_icon_16.png'
import './SortSheet.css'

const SortSheet = () => {
  const { applySort, showSortSheet, setShowSortSheet } = useContext(Context)
  const inputHandler = (id) => {
    applySort(id)
  }
  return (
    <div className="SortSheet">
      <div className="SortSheetContainer">
        <header className="SortSheet__header">
          <h4 className="SortSheet__title">Сортировка</h4>
          <div className="SortSheet__cancel">
            <img src={cancel_icon_16} alt="cancel icon" onClick={() => setShowSortSheet(!showSortSheet)}/>
          </div>
        </header>
        <div className="SortSheet__content">
          <div className="radio">
            <input
              type="radio"
              id="alphabet"
              name="radio"
              onClick={(e) => inputHandler(e.target.id)}
              defaultChecked
            ></input>
            <label htmlFor="alphabet">по алфавиту</label>
          </div>
          <div className="radio">
            <input
              type="radio"
              id="birthday"
              name="radio"
              onClick={(e) => inputHandler(e.target.id)}
            ></input>
            <label htmlFor="birthday">по дню рождения</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortSheet
