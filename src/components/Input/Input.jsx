import React from 'react'
import MemoizedTrash from '../Trash/Trash'
import { FaCopy } from 'react-icons/fa'
import './Input.css'

const Input = ({ handleInput, value, name, message, cleanInput, copyToClipboard }) => {
  return (
    <div className='boxInputM'>
      <label htmlFor={name}>{message}</label>
      <div className="boxInput">
        <input type="text" id={name} name={name} onChange={handleInput} value={value} />
        <MemoizedTrash cleanInput={cleanInput} className='trash' />
        <FaCopy onClick={copyToClipboard} className='copy' />
      </div>
    </div>
  )
}

export default Input