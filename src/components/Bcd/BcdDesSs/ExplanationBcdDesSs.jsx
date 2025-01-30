import React from 'react'
import { binary } from '../../../utils/data'
import { memo } from 'react'

const ExplanationBcdDesSs = ({ chain }) => {
  return (
    <>
      {
        chain.length > 0 &&
        <ul className='listBCD'>
          {
            chain.split('').map((item, index) => (
              < li key={`desSs${index}`} className='liBCD'>
                <p>{item}</p>
                <p>{binary['F']} {binary[item]}</p>
              </li>
            ))
          }
        </ul>
      }
    </>
  )
}

const ExplanationBcdDesSsMemoized = memo(ExplanationBcdDesSs, (prev, next) => prev.chain === next.chain)

export default ExplanationBcdDesSsMemoized