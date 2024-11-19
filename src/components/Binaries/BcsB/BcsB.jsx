import React from 'react'
import { memo } from 'react'
import { useGetBcsB } from "../../../hooks/useGetBcsB"

const BcsBComponent = ({ chain }) => {
  const info = useGetBcsB(chain)

  return (
    <article>
      <h4>BCS</h4>
      <p>El número interpretado en BCS es: {info.binary}</p>
      <p>El máximo N° positivo representable es: {info.max.positive}</p>
      <p>El máximo N° negativo representable es: {info.max.negative}</p>
    </article>
  )
}

const MemoizedBcsBComponent = memo(BcsBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedBcsBComponent