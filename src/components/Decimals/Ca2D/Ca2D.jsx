import React from 'react'
import { memo } from 'react'
import { useGetCa2D } from "../../../hooks/useGetCa2D"
import TFDLAMeoized from '../../Binaries/TFDLA/TFDLA'
import { useGetCa2TFDLA } from '../../../hooks/useGetCa2TFDLA'
import Ca2DExplanationMemoized from './Ca2DExplanation'

const Ca2DComponent = ({ chain, boolean }) => {
  const binarie = useGetCa2D(chain, boolean) || ''

  const chainToTDFLA = useGetCa2TFDLA(binarie) || ''

  return (
    <article>
      <p>En Ca2: {chain ? binarie : ''}</p>
      <TFDLAMeoized chain={chainToTDFLA} />
      <Ca2DExplanationMemoized boolean={boolean} ca2={binarie} chain={chain} />
    </article>
  )
}

const MemoizedCa2DComponent = memo(Ca2DComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedCa2DComponent