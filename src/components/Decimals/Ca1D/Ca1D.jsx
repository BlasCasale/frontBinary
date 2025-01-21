import React from 'react'
import { memo } from 'react'
import { useGetCa1D } from "../../../hooks/useGetCa1D"
import { useGetNot } from '../../../hooks/useGetNot'
import Ca1DExplanation from './Ca1DExplanation'
import TDFLAExplanationMemoized from '../../Binaries/TFDLA/TDFLAExplanation/TDFLAExplanation'

const Ca1DComponent = ({ chain, boolean }) => {
  const binarie = useGetCa1D(chain, boolean) || ''

  const chainToTDFLA = useGetNot(binarie) || ''

  const negative = chain[0] === '-'

  return (
    <article>
      <p>En Ca1: {chain ? binarie : ''}</p>
      <TDFLAExplanationMemoized chain={chainToTDFLA} negative={negative} key={'Ca1ExplanationDecimal'} />
      <Ca1DExplanation boolean={boolean} chain={binarie} />
    </article>
  )
}

const MemoizedCa1DComponent = memo(Ca1DComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedCa1DComponent