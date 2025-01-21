import React from 'react'
import { useMemo, memo } from 'react'
import './TFDLADecompose.css'

const TFDLADecompose = ({ chain }) => {

  const maxIndex = useMemo(() => {
    return chain.length - 1
  }, [chain])

  const chainToArray = chain.split('')

  return (
    <div className='boxChainTFDLA'>
      {
        chainToArray.map((char, i) => (
          <div key={i} className='boxChar'>
            <p className='charTFDLA'>{char}</p>
            <p className='indexTFDLA'>{maxIndex - i}</p>
          </div>
        ))
      }
    </div>
  )
}

const TFDLADecomposeMemoized = memo(TFDLADecompose, (prev, next) => prev.chain === next.chain)

export default TFDLADecomposeMemoized