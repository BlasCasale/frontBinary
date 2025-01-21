import React from 'react'
import { useMemo, memo } from 'react'
import './TDFLAExplanation.css'

const TDFLAExplanation = ({ chain, negative }) => {

  const maxIndex = useMemo(() => {
    return chain.length - 1
  }, [chain])

  const chainToArray = chain.split('')

  return (
    <div className='boxExplanationTDFLA'>
      <span className='charTDFLAE boxExplanationTDFLA'>{negative && '('}
        {
          chainToArray.map((char, i) => (
            char !== '0' ?
              <div key={`charETDFLA${i}`} className='boxTDFLACharE'>
                <p className='charTDFLAE'>{char} x 2</p>
                <p className='powTDFLAE'>{maxIndex - i}</p>
                {
                  char !== '0' && chainToArray.slice(i + 1).some((ch) => ch === '1')
                    ?
                    <p className='charTDFLAE'> + </p>
                    :
                    ''
                }
              </div>
              :
              <></>
          ))
        }
        {negative && ')'}
      </span>
      {negative && <p className='charTDFLAE'>x -1</p>}
    </div>
  )
}

const TDFLAExplanationMemoized = memo(TDFLAExplanation, (prev, next) => prev.chain === next.chain)

export default TDFLAExplanationMemoized