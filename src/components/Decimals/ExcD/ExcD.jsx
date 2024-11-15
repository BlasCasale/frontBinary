import { memo } from 'react'
import { useGetExcD } from "../../../hooks/useGetExcD"

const ExcDComponent = ({ chain, boolean }) => {
  const binarie = useGetExcD(chain, boolean) || ''

  return (
    <article>
      <p>Exc: {chain ? binarie : ''}</p>
    </article>
  )
}

const MemoizedExcDComponent = memo(ExcDComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedExcDComponent