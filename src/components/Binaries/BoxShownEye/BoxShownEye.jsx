import React from 'react'
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi'
import { memo } from 'react'

const BoxShownEye = ({ shown, handleShown }) => {
  return (
    <div>
      <p>Explicación del sistema:</p>
      {!shown ? <PiEyeBold onClick={handleShown} /> : <PiEyeClosedBold onClick={handleShown} />}
    </div>
  )
}

const BoxShownEyeMemoized = memo(BoxShownEye, (prev, next) => prev.shown === next.shown)

export default BoxShownEyeMemoized