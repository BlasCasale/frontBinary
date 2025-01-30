import React from 'react'
import TFDLADecomposeMemoized from '../TFDLA/TFDLADecompose/TFDLADecompose'
import TFDLAMeoized from '../TFDLA/TFDLA'

const ExplanationCa1B = ({ chainToTFDLA, chain }) => {
  return (
    <div className='boxExplanation'>
      <div className='boxExplanationCa1'>
        <TFDLADecomposeMemoized chain={chain.slice(1)} key={'explanationCa1'} />
        {chain && <p className='charTFDLA'>NOT =</p>}
        <TFDLADecomposeMemoized chain={chainToTFDLA} key={'notExplanation'} />
      </div>

      <TFDLAMeoized chain={chainToTFDLA} key={'TFDLACa1F'} negative={chain[0] === '1'} />

      <p>En complemente a 1, la cadena a interpretar primero debemos realizar una operación NOT para saber cuales son los bits en 1 que tenemos dentro del número, o sin realizar esta operación podemos darnos cuenta por la cantidad de 0 que tenga nuestra cadena. De la misma manera que en BCS, en este sistema contamos con números positivos y negativos, por lo tanto el primer bit sera reservado para el módulo, los demas bits son partes del número.</p>
    </div>
  )
}

export default ExplanationCa1B