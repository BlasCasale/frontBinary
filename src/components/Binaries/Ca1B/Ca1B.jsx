import React from 'react'
import { memo, useMemo } from 'react'
import { useGetCa1B } from "../../../hooks/useGetCa1B"
import TFDLA from '../TFDLA/TFDLA'
import { useGetNot } from '../../../hooks/useGetNot'
import TFDLADecomposeMemoized from '../TFDLA/TFDLADecompose/TFDLADecompose'
import './Ca1B.css'

const Ca1BComponent = ({ chain }) => {
  const info = useGetCa1B(chain) || {}
  const { binary = '', max = {} } = info
  const { positive = '', negative = '' } = max

  const chainToTFDLA = useGetNot(chain.slice(1))

  return (
    <article className='cardBinaries'>
      <h4>Ca1</h4>
      <p>El número interpretado en Ca1 es: {binary}</p>
      <p>El máximo número positivo representable es: {positive}</p>
      <p>El máximo número negativo representable es: {negative}</p>

      <div className='boxExplanationCa1'>
        <TFDLADecomposeMemoized chain={chain.slice(1)} key={'explanationCa1'} />
        <p className='charTFDLA'>NOT =</p>
        <TFDLADecomposeMemoized chain={chainToTFDLA} key={'notExplanation'} />
      </div>

      <TFDLA chain={chainToTFDLA} key={'TFDLACa1F'} negative={chain[0] === '1'} />

      <p>Explicación del sistema: En complemente a 1, la cadena a interpretar primero debemos realizar una operación NOT para saber cuales son los bits en 1 que tenemos dentro del número, o sin realizar esta operación podemos darnos cuenta por la cantidad de 0 que tenga nuestra cadena. De la misma manera que en BCS, en este sistema contamos con números positivos y negativos, por lo tanto el primer bit sera reservado para el módulo, los demas bits son partes del número.</p>
    </article>
  )
}

const MemoizedCa1BComponent = memo(Ca1BComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedCa1BComponent