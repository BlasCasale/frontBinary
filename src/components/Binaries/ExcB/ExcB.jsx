import React, { useMemo } from 'react'
import { memo } from 'react'
import { useGetExcB } from '../../../hooks/useGetExcB'
import TFDLA from '../TFDLA/TFDLA'

const ExcBComponent = ({ chain }) => {
  const info = useGetExcB(chain) || {}
  const { binary = '', max = {} } = info
  const { positive = '', negative = '' } = max

  const maxNumber = useMemo(() => {
    return Math.pow(2, chain.length - 1)
  }, [chain])
  return (
    <article className='cardBinaries'>
      <h4>Exc</h4>
      <p>El número interpretado en Exc es: {binary}</p>
      <p>El máximo número positivo representable es: {positive}</p>
      <p>El máximo número negativo representable es: {negative}</p>

      <TFDLA chain={chain} key={'TFDLAExc2'} />

      <p>{Number(binary) + maxNumber} - {maxNumber} = {binary}</p>

      <p>Explicación del sistema: Cuando se quiere interpretar números en exceso a 2, uno debe interpretar la cadena binaria como en binario sin signo y luego restarle el peso del bit mas significativo (mas a la izquierda) al número interpretado previamente, esto nos dara el resultado final en este sistema.</p>
    </article>
  )
}

// Nombrar explícitamente el componente memoizado
const MemoizedExcBComponent = memo(ExcBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedExcBComponent