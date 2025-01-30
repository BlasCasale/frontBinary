import React from 'react'
import { memo, useState, useCallback } from 'react'
import { useGetBssD } from "../../../hooks/useGetBssD"
import TFDLA from '../../Binaries/TFDLA/TFDLA'
import BssDExplanationMemoized from './BssDExplanation'
import BoxShownEyeMemoized from '../../Binaries/BoxShownEye/BoxShownEye'

const BssDComponent = ({ chain, boolean }) => {
  const wrongResponse = "No se puede representar números negativos en BSS"
  const binarie = useGetBssD(chain) || ''

  const [shown, setShown] = useState(false)

  const handleShown = useCallback(() => {
    setShown((prev) => !prev)
  }, [shown])

  const number = boolean ? Number(chain) : Number(chain.slice(1))

  return (
    <article className='cardBinaries'>
      <p>En BSS: {boolean ? binarie : wrongResponse}</p>
      <TFDLA chain={binarie} key={'explanationBssD'} />
      <BoxShownEyeMemoized handleShown={handleShown} shown={shown} />
      {shown && <BssDExplanationMemoized number={number} binary={binarie} key={'explanationBssDInter'} />}
    </article>
  )
}

const MemoizedBssDComponent = memo(BssDComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedBssDComponent
