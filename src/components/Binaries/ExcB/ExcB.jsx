import React from 'react'
import { memo, useMemo, useState, useCallback } from 'react'
import { useGetExcB } from '../../../hooks/useGetExcB'
import ExplanationExcB from './ExplanationExcB'
import BoxShownEye from '../BoxShownEye/BoxShownEye'

const ExcBComponent = ({ chain }) => {
  const info = useGetExcB(chain) || {}
  const { binary = '', max = {} } = info
  const { positive = '', negative = '' } = max

  const maxNumber = useMemo(() => {
    return Math.pow(2, chain.length - 1)
  }, [chain])

  const [shown, setShown] = useState(false)

  const handleShown = useCallback(() => {
    setShown((prev) => !prev)
  }, [])

  return (
    <article className='cardBinaries'>
      <h4>Exc</h4>
      <p>El número interpretado en Exc es: {binary}</p>
      <p>El máximo número positivo representable es: {positive}</p>
      <p>El máximo número negativo representable es: {negative}</p>

      <BoxShownEye handleShown={handleShown} shown={shown} key={'boxExcB'} />

      {shown && <ExplanationExcB binary={binary} chain={chain} maxNumber={maxNumber} key={'explanationExc2B'} />}

    </article>
  )
}

// Nombrar explícitamente el componente memoizado
const MemoizedExcBComponent = memo(ExcBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedExcBComponent