import React from 'react'
import { memo } from 'react'
import { useGetCompleteBinary } from '../../../hooks/useGetCompleteBinary'
import { hexa } from '../../../utils/data'
import './ExplanationGetHexa.css'
const ExplanationGetHexa = ({ chain }) => {

  const binaries = useGetCompleteBinary(chain)

  return (
    <>
      {
        binaries.length > 0 &&
        <ul className='listHexa'>
          {
            binaries.map((item, index) => (
              <li key={`hexa${index}`} className='liHexa'>
                <p>{item}</p>
                <p>{hexa[item]}</p>
              </li>
            ))
          }
        </ul>
      }
    </>
  )
}

const ExplanationGetHexaMemoized = memo(ExplanationGetHexa, (prev, next) => prev.chain === next.chain)

export default ExplanationGetHexaMemoized