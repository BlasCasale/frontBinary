import React from 'react'
import { memo, useState } from 'react'
import { useGetBcsB } from "../../../hooks/useGetBcsB"
import './BcsB.css'
import TFDLAMemoized from '../TFDLA/TFDLA'

const BcsBComponent = ({ chain }) => {
  const info = useGetBcsB(chain)

  const newChain = chain.slice(1)

  const [shown, setShown] = useState(false)

  const handleShown = () => setShown((prev) => !prev)

  return (
    <article className='cardBinaries'>
      <h4>BCS</h4>
      <p>El número interpretado en BCS es: {info.binary}</p>
      <p>El máximo número positivo representable es: {info.max.positive}</p>
      <p>El máximo número negativo representable es: {info.max.negative}</p>
      <button onClick={handleShown}>Abrir</button>
      Explicación del sistema:
      {
        shown &&
        <>
          <TFDLAMemoized chain={newChain} key={'TFDLABcs'} />
          <p>A diferencia del BSS, en este sistema se incorpora el módulo (signo) a la cadena. El bit mas significativo* se utilizara para determinar si el número a interpretar es positivo o negativo, siendo 1 el valor de los negativos y 0 para los positivos. El resto de los bits conformaran el número en dicho sistema.</p>

          <p>* El bit mas significativo hace referencia aquel número mayor determinado por 2^n.</p>
        </>
      }
    </article>
  )
}

const MemoizedBcsBComponent = memo(BcsBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedBcsBComponent