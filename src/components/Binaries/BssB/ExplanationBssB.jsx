import React from 'react'
import TFDLAMemoized from '../TFDLA/TFDLA'

const ExplanationBssB = ({ chain }) => {
  return (
    <div className='boxExplanation'>
      <TFDLAMemoized chain={chain} key={'TDFLA'} />
      <p> En BSS al no estar el signo, todos los bits que pertenezcan a la cadena serán interpretados como números.</p>
    </div>
  )
}

export default ExplanationBssB