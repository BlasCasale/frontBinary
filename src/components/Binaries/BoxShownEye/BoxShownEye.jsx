import React from 'react'
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi'
import { memo } from 'react'
import './BoxShownEye.css'

const BoxShownEye = ({ shown, handleShown }) => {
  return (
    <div className='boxShownEye'>
      <p>Explicación del sistema:</p>
      {!shown ? <PiEyeBold onClick={handleShown} className='eye' /> : <PiEyeClosedBold onClick={handleShown} className='eye' />}
    </div>
  )
}

const BoxShownEyeMemoized = memo(BoxShownEye, (prev, next) => prev.shown === next.shown)

export default BoxShownEyeMemoized