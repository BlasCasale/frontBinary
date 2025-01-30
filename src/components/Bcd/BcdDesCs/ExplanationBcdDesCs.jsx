import React from 'react'
import { binary } from '../../../utils/data'
import { memo } from 'react'

const ExplanationBcdDesCs = ({ chain, boolean }) => {
  return (
    <>
      {
        chain.length > 0 &&
        <ul className='listBCD'>
          {
            chain.split('').map((item, index) => (
              <li key={`desCs${index}`} className='liBCD'>
                <p>{item}</p>
                <p>{index !== chain.length - 1 ? `${binary['F']} ${binary[item]}` : boolean ? `${binary['C']} ${binary[item]}` : `${binary['D']} ${binary[item]}`}</p>
              </li>
            ))
          }
        </ul>
      }
    </>
  )
}

const ExplanationBcdDesCsMemoized = memo(ExplanationBcdDesCs, (prev, next) => prev.chain === next.chain && prev.boolean === next.boolean)

export default ExplanationBcdDesCsMemoized