import React from 'react'
import { memo } from 'react'
import { useGetCa2B } from "../../../hooks/useGetCa2B"
import './Ca2B.css'
import { useGetCa2TFDLA } from '../../../hooks/useGetCa2TFDLA'
import TFDLA from '../TFDLA/TFDLA'
import TFDLADecomposeMemoized from '../TFDLA/TFDLADecompose/TFDLADecompose'

const Ca2BComponent = ({ chain }) => {
  const info = useGetCa2B(chain) || {}
  const { binary = '', max = {} } = info
  const { positive = '', negative = '' } = max

  const render = useGetCa2TFDLA(chain)

  return (
    <article className='cardBinaries'>
      <h4>Ca2</h4>
      <p>El número interpretado en Ca2 es: {binary}</p>
      <p>El máximo número positivo representable es: {positive}</p>
      <p>El máximo número negativo representable es: {negative}</p>

      <div className='boxExplanationCa1'>
        <TFDLADecomposeMemoized chain={chain} key={'explanationCa2'} />
        <p className='charTFDLA'>NOT =</p>
        <TFDLADecomposeMemoized chain={render} key={'notExplanationCa2'} />
      </div>
      <TFDLA chain={render} negative={chain[0] === '1'} key={'TFDLACa2Ex'} />

      <p>Explicación del sistema: Complemente a 2 funciona de manera parecida a complemento a 1, pero este tiene una pequeña diferencia, esta erradica en los negativos del sistema. Esta diferencia esta con los negativos, dado que luego de hacer la operación NOT, debemos sumar 1 bit al bit menos significativo (derecha) para poder encontrar cual es el número que esta en la cadena binaria. Otra manera mas sencilla de encontrar el número es copiar todos los bits comenzando desde la derecha hasta encontrar el primer 1, luego invertir los bits de la izquiera con una operación NOT.</p>
    </article>
  )
}

const MemoizedCa2BComponent = memo(Ca2BComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedCa2BComponent