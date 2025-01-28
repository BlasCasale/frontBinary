import React from 'react'
import { memo } from 'react'
import { binary } from '../../../utils/data'
import './ExplanationBcdEmpSs.css'

const ExplanationBcdEmpSs = ({ number }) => {

  const render = number.split('')

  return (
    <ul className='listBCD'>
      {
        render.map((item, index) => (
          <li key={`empSs${index}`} className='liBCD'>
            <p>{item}</p>
            <p>{binary[item]}</p>
          </li>
        ))
      }
    </ul>
  )
}

const ExplanationBcdEmpSsMemoized = memo(ExplanationBcdEmpSs, (prev, next) => prev.number === next.number)

export default ExplanationBcdEmpSsMemoized