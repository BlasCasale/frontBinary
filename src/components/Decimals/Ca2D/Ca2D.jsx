import React from 'react'
import { memo, useState, useCallback } from 'react'
import { useGetCa2D } from "../../../hooks/useGetCa2D"
import TFDLAMeoized from '../../Binaries/TFDLA/TFDLA'
import { useGetCa2TFDLA } from '../../../hooks/useGetCa2TFDLA'
import Ca2DExplanationMemoized from './Ca2DExplanation'
import BoxShownEyeMemoized from '../../Binaries/BoxShownEye/BoxShownEye'

const Ca2DComponent = ({ chain, boolean }) => {
  const binarie = useGetCa2D(chain, boolean) || ''

  const chainToTDFLA = useGetCa2TFDLA(binarie) || ''

  const [shown, setShown] = useState(false)

  const handleShown = useCallback(() => {
    setShown((prev) => !prev)
  }, [shown])

  return (
    <article className='cardBinaries'>
      <p>En Ca2: {chain ? binarie : ''}</p>
      <TFDLAMeoized chain={chainToTDFLA} />
      <BoxShownEyeMemoized handleShown={handleShown} shown={shown} />
      {shown && <Ca2DExplanationMemoized boolean={boolean} ca2={binarie} chain={chain} />}
    </article>
  )
}

const MemoizedCa2DComponent = memo(Ca2DComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedCa2DComponent