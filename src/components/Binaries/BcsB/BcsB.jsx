import React from 'react'
import { memo } from 'react'
import { useGetBcsB } from "../../../hooks/useGetBcsB"
import './BcsB.css'
import TFDLAMemoized from '../TFDLA/TFDLA'

const BcsBComponent = ({ chain }) => {
  const info = useGetBcsB(chain)

  const newChain = chain.slice(1)

  return (
    <article className='cardBinaries'>
      <h4>BCS</h4>
      <p>El número interpretado en BCS es: {info.binary}</p>
      <p>El máximo número positivo representable es: {info.max.positive}</p>
      <p>El máximo número negativo representable es: {info.max.negative}</p>
      <TFDLAMemoized chain={newChain} key={'TFDLABcs'}/>
      <p>Explicación del sistema: A diferencia del BSS, en este sistema se incorpora el módulo al número, por lo tanto el bit mas significativo se utilizara para poder identificar si el número a interpretar es positivo a negativo, siendo 1 el valor de los negativos y 0 para los positivos. Cabe aclarar que el resto de los bits conformaran el número en dicho sistema.</p>
    </article>
  )
}

const MemoizedBcsBComponent = memo(BcsBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedBcsBComponent