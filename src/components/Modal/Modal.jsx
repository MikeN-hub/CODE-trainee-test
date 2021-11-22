import React, { useState, useContext } from 'react'
import { Context } from '../../context'
import cancel_icon from '../../assets/icons/cancel.png'
import './Modal.css'

const Modal = () => {
  const { applySort, showModal, setShowModal } = useContext(Context)
  const inputHandler = (id) => {
    applySort(id)
  }
  return (
    <div className="Modal">
      <div className="Modal-container">
        <header className="Modal__header">
          <h4 className="Modal__title">Сортировка</h4>
          <div className="Modal__cancel">
            <img src={cancel_icon} alt="cancel pic" onClick={() => setShowModal(false)}/>
          </div>
        </header>
        <div className="Modal__content">
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

export default Modal
