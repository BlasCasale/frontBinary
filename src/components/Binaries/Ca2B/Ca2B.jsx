import { memo } from 'react'
import { useGetCa2B } from "../../../hooks/useGetCa2B"

const Ca2BComponent = ({ chain }) => {
  const info = useGetCa2B(chain) || {}
  const { binary = '', max = {} } = info
  const { positive = '', negative = '' } = max

  return (
    <article>
      <h4>Ca2</h4>
      <p>El número interpretado en Ca2 es: {binary}</p>
      <p>El máximo número positivo representable es: {positive}</p>
      <p>El máximo número negativo representable es: {negative}</p>
    </article>
  )
}

const MemoizedCa2BComponent = memo(Ca2BComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedCa2BComponent