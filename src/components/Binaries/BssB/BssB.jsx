import React from 'react'
import { memo, useState, useCallback } from 'react'
import { useGetBssB } from "../../../hooks/useGetBssB"
import './BssB.css'
import ExplanationBssB from './ExplanationBssB'
import BoxShownEye from '../BoxShownEye/BoxShownEye'

const BssBComponent = ({ chain }) => {
  const info = useGetBssB(chain) || {}
  const { num = '', max = '' } = info

  const [shown, setShown] = useState(false)

  const handleShown = useCallback(() => {
    setShown((prev) => !prev)
  }, [])

  return (
    <article className='cardBinaries'>
      <h4>BSS</h4>
      <p>El número interpretado en BSS es: {num}</p>
      <p>Máximo número representable en BSS: {max}</p>

      <BoxShownEye handleShown={handleShown} shown={shown} key={'boxBssB'} />

      {shown && <ExplanationBssB chain={chain} />}
    </article >
  )
}

const MemoizedBssBComponent = memo(BssBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedBssBComponent