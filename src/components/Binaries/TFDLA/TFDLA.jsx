import React from 'react'
import { memo } from 'react'
import './TFDLA.css'
import TFDLADecomposeMemoized from './TFDLADecompose/TFDLADecompose'
import TDFLAExplanationMemoized from './TDFLAExplanation/TDFLAExplanation'

const TFDLA = ({ chain, negative = false }) => {
  return (
    <div className='boxTFDLA'>
      <h4>Teorema fundamental de la numeración:</h4>
      <TFDLADecomposeMemoized chain={chain} key={'TDFLADecompose'} />
      <TDFLAExplanationMemoized chain={chain} negative={negative} key={'TDFLAExplanation'} />
    </div>
  )
}

const TFDLAMeoized = memo(TFDLA, (prev, next) => prev.chain === next.chain)

export default TFDLAMeoized