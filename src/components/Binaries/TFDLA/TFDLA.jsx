import React from 'react'
import { memo } from 'react'

const TFDLA = ({ chain }) => {
  return (
    <div>
      <h4>Teorema fundamental de la numeración:</h4>
    </div>
  )
}

const TFDLAMeoized = memo(TFDLA, (prev, next) => prev.chain === next.chain)

export default TFDLAMeoized