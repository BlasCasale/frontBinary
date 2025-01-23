import React from 'react'
import { memo, useState, useCallback } from 'react'
import { useGetBcsB } from "../../../hooks/useGetBcsB"
import './BcsB.css'
import ExplanationBcsB from './ExplanationBcsB'
import BoxShownEye from '../BoxShownEye/BoxShownEye'

const BcsBComponent = ({ chain }) => {
  const info = useGetBcsB(chain)

  const newChain = chain.slice(1)

  const [shown, setShown] = useState(false)

  const handleShown = useCallback(() => {
    setShown((prev) => !prev)
  }, [])

  return (
    <article className='cardBinaries'>
      <h4>BCS</h4>
      <p>El número interpretado en BCS es: {info.binary}</p>
      <p>El máximo número positivo representable es: {info.max.positive}</p>
      <p>El máximo número negativo representable es: {info.max.negative}</p>

      <BoxShownEye handleShown={handleShown} shown={shown} key={'boxBcsB'} />

      {shown && <ExplanationBcsB newChain={newChain} key={'explanationBcsB'} />}
    </article>
  )
}

const MemoizedBcsBComponent = memo(BcsBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedBcsBComponent