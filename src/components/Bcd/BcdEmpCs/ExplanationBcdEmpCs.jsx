import React from 'react'
import { binary } from '../../../utils/data'
import { memo } from 'react'

const ExplanationBcdEmpCs = ({ number }) => {

  const render = number[0] === '-' ? number.slice(1).split('') : number.split('')

  return (
    <ul className='listBCD'>
      {
        number.length > 0 &&
        <>
          {
            render.map((item, index) => (
              <li key={`empCs${index}`} className='liBCD'>
                <p>{item}</p>
                <p>{binary[item]}</p>
              </li>
            ))
          }

          {
            number[0] === '-' ?
              <li key={'empCsD'} className={`liBCD`}>
                <p>-</p>
                <p>{binary['D']}</p>
              </li>
              :
              <li key={'empCsC'} className='liBCD'>
                <p>+</p>
                <p>{binary['C']}</p>
              </li>
          }
        </>
      }

    </ul>
  )
}

const ExplanationBcdDesCsMemoized = memo(ExplanationBcdEmpCs, (prev, next) => prev.number === next.number)

export default ExplanationBcdDesCsMemoized