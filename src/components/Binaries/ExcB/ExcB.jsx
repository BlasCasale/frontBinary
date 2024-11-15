import { memo } from 'react'
import { useGetExcB } from '../../../hooks/useGetExcB'

const ExcBComponent = ({ chain }) => {
  const info = useGetExcB(chain) || {}
  const { binary = '', max = {} } = info
  const { positive = '', negative = '' } = max

  return (
    <article>
      <h4>Exc</h4>
      <p>El número interpretado en Exc es: {binary}</p>
      <p>El máximo número positivo representable es: {positive}</p>
      <p>El máximo número negativo representable es: {negative}</p>
    </article>
  )
}

// Nombrar explícitamente el componente memoizado
const MemoizedExcBComponent = memo(ExcBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedExcBComponent