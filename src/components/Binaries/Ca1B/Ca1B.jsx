import { memo } from 'react'
import { useGetCa1B } from "../../../hooks/useGetCa1B"

const Ca1BComponent = ({ chain }) => {
  const info = useGetCa1B(chain) || {}
  const { binary = '', max = {} } = info
  const { positive = '', negative = '' } = max

  return (
    <article>
      <h4>Ca1</h4>
      <p>El número interpretado en Ca1 es: {binary}</p>
      <p>El máximo número positivo representable es: {positive}</p>
      <p>El máximo número negativo representable es: {negative}</p>
    </article>
  )
}

const MemoizedCa1BComponent = memo(Ca1BComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedCa1BComponent