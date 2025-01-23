import React from 'react'
import { memo, useState, useCallback } from 'react'
import { useGetCa2B } from "../../../hooks/useGetCa2B"
import { useGetCa2TFDLA } from '../../../hooks/useGetCa2TFDLA'
import ExplanationCa2B from './ExplanationCa2B'
import BoxShownEye from '../BoxShownEye/BoxShownEye'

const Ca2BComponent = ({ chain }) => {
  const info = useGetCa2B(chain) || {}
  const { binary = '', max = {} } = info
  const { positive = '', negative = '' } = max

  const render = useGetCa2TFDLA(chain)

  const [shown, setShown] = useState(false)

  const handleShown = useCallback(() => {
    setShown((prev) => !prev)
  }, [])

  return (
    <article className='cardBinaries'>
      <h4>Ca2</h4>
      <p>El número interpretado en Ca2 es: {binary}</p>
      <p>El máximo número positivo representable es: {positive}</p>
      <p>El máximo número negativo representable es: {negative}</p>

      <BoxShownEye handleShown={handleShown} shown={shown} key={'boxCa2B'} />

      {shown && <ExplanationCa2B chain={chain} render={render} key={'explanationCa2B'} />}
    </article>
  )
}

const MemoizedCa2BComponent = memo(Ca2BComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedCa2BComponent