import React from 'react'
import { memo } from 'react'
import { useGetBssD } from "../../../hooks/useGetBssD"
import TFDLA from '../../Binaries/TFDLA/TFDLA'
import BssDExplanationMemoized from './BssDExplanation'

const BssDComponent = ({ chain, boolean }) => {
  const wrongResponse = "No se puede representar números negativos en BSS"
  const binarie = useGetBssD(chain) || ''

  const number = boolean ? Number(chain) : Number(chain.slice(1))

  return (
    <article>
      <p>En BSS: {boolean ? binarie : wrongResponse}</p>
      <TFDLA chain={binarie} key={'explanationBssD'} />
      <BssDExplanationMemoized number={number} binary={binarie} key={'explanationBssDInter'} />
    </article>
  )
}

const MemoizedBssDComponent = memo(BssDComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedBssDComponent
