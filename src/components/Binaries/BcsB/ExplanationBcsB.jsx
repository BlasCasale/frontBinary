import React from 'react'
import TFDLAMemoized from '../TFDLA/TFDLA'

const ExplanationBcsB = ({ newChain }) => {
  return (
    <>
      <TFDLAMemoized chain={newChain} key={'TFDLABcs'} />
      <p>A diferencia del BSS, en este sistema se incorpora el módulo (signo) a la cadena. El bit mas significativo* se utilizara para determinar si el número a interpretar es positivo o negativo, siendo 1 el valor de los negativos y 0 para los positivos. El resto de los bits conformaran el número en dicho sistema.</p>

      <p>* El bit mas significativo hace referencia aquel número mayor determinado por 2^n.</p>
    </>
  )
}

export default ExplanationBcsB