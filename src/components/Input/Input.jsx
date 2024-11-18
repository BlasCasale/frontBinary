import React from 'react'
import MemoizedTrash from '../Trash/Trash'

const Input = ({ handleInput, value, name, message, cleanInput }) => {
  return (
    <div>
      <div>
        <label htmlFor={name}>{message}</label>
        <div className="boxInput">
          <input type="text" id={name} name={name} onChange={handleInput} value={value} />
          <MemoizedTrash cleanInput={cleanInput} />
        </div>
      </div>
    </div>
  )
}

export default Input