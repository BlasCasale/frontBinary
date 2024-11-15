import { memo } from 'react'
import { useGetBcsB } from "../../../hooks/useGetBcsB"

const BcsBComponent = ({ chain }) => {
  const info = useGetBcsB(chain) || {}
  const { binary = '', max = {} } = info
  const { positive = '', negative = '' } = max

  return (
    <article>
      <h4>BCS</h4>
      <p>El numero interpretado en BCS es: {binary}</p>
      <p>El máximo N° positivo representable es: {positive}</p>
      <p>El máximo N° negativo representable es: {negative}</p>
    </article>
  )
}

const MemoizedBcsBComponent = memo(BcsBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedBcsBComponent