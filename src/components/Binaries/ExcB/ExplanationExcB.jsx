import React from 'react'
import TFDLAMemoized from '../TFDLA/TFDLA'

const ExplanationExcB = ({ chain, binary, maxNumber }) => {
  return (
    <div className='boxExplanation'>
      <TFDLAMemoized chain={chain} key={'TFDLAExc2'} />

      {chain && <p>{Number(binary) + maxNumber} - {maxNumber} = {binary}</p>}

      <p>Cuando se quiere interpretar números en exceso a 2, uno debe interpretar la cadena binaria como en binario sin signo y luego restarle el peso del bit mas significativo (mas a la izquierda) al número interpretado previamente, esto nos dara el resultado final en este sistema.</p>
    </div>
  )
}

export default ExplanationExcB