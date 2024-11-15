import { memo } from 'react'
import { useGetBssD } from "../../../hooks/useGetBssD"

const BssDComponent = ({ chain, boolean }) => {
  const wrongResponse = "No se puede representar N° negativos en BSS"
  const binarie = useGetBssD(chain) || ''

  return (
    <article>
      <p>En BSS: {boolean ? binarie : wrongResponse}</p>
    </article>
  )
}

const MemoizedBssDComponent = memo(BssDComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedBssDComponent
