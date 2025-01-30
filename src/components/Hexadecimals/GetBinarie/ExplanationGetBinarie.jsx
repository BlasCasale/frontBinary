import React from 'react'
import { memo } from 'react'
import { binary } from '../../../utils/data'

const ExplanationGetBinarie = ({ chain }) => {
  return (
    <>
      {
        chain.length > 0 &&
        <ul className='listHexa'>
          {
            chain.split('').map((item, index) => (
              <li key={`binarie${index}`} className='liHexa'>
                <p>{item}</p>
                <p>{binary[item]}</p>
              </li>
            ))
          }
        </ul>
      }
    </>
  )
}

const ExplanationGetBinarieMemoized = memo(ExplanationGetBinarie, (prev, next) => prev.chain === next.chain)

export default ExplanationGetBinarieMemoized