import React from 'react'
import { memo } from 'react'
import { useGetBssB } from "../../../hooks/useGetBssB"

const BssBComponent = ({ chain }) => {
  const info = useGetBssB(chain) || {}
  const { num = '', max = '' } = info

  return (
    <article>
      <h4>BSS</h4>
      <p>El número interpretado en BSS es: {num}</p>
      <p>Máximo número representable en BSS: {max}</p>
    </article>
  )
}

const MemoizedBssBComponent = memo(BssBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedBssBComponent