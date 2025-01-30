import React from 'react'
import TFDLADecomposeMemoized from '../TFDLA/TFDLADecompose/TFDLADecompose'
import TFDLA from '../TFDLA/TFDLA'

const ExplanationCa2B = ({ chain, render }) => {
  return (
    <>
      <div className='boxExplanation'>
        <TFDLADecomposeMemoized chain={chain} key={'explanationCa2'} />
        {chain && <p className='charTFDLA'>NOT =</p>}
        <TFDLADecomposeMemoized chain={render} key={'notExplanationCa2'} />
      </div>
      <TFDLA chain={render} negative={chain[0] === '1'} key={'TFDLACa2Ex'} />
      <p>Complemente a 2 funciona de manera parecida a complemento a 1, pero este tiene una pequeña diferencia, esta erradica en los negativos del sistema. Esta diferencia esta con los negativos, dado que luego de hacer la operación NOT, debemos sumar 1 bit al bit menos significativo (derecha) para poder encontrar cual es el número que esta en la cadena binaria. Otra manera mas sencilla de encontrar el número es copiar todos los bits comenzando desde la derecha hasta encontrar el primer 1, luego invertir los bits de la izquiera con una operación NOT.</p>
    </>

  )
}

export default ExplanationCa2B