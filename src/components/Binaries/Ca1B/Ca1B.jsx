import React from 'react'
import { memo, useState, useCallback } from 'react'
import { useGetCa1B } from "../../../hooks/useGetCa1B"
import { useGetNot } from '../../../hooks/useGetNot'
import './Ca1B.css'
import ExplanationCa1B from './ExplanationCa1B'
import BoxShownEye from '../BoxShownEye/BoxShownEye'

const Ca1BComponent = ({ chain }) => {
  const info = useGetCa1B(chain) || {}
  const { binary = '', max = {} } = info
  const { positive = '', negative = '' } = max

  const chainToTFDLA = useGetNot(chain.slice(1))

  const [shown, setShown] = useState(false)

  const handleShown = useCallback(() => {
    setShown((prev) => !prev)
  }, [])

  return (
    <article className='cardBinaries'>
      <h4>Ca1</h4>
      <p>El número interpretado en Ca1 es: {binary}</p>
      <p>El máximo número positivo representable es: {positive}</p>
      <p>El máximo número negativo representable es: {negative}</p>

      <BoxShownEye handleShown={handleShown} shown={shown} key={'boxCa1'} />

      {shown && <ExplanationCa1B chain={chain} chainToTFDLA={chainToTFDLA} key={'explaCa1B'} />}
    </article>
  )
}

const MemoizedCa1BComponent = memo(Ca1BComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedCa1BComponent