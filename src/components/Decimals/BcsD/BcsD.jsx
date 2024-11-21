import React from 'react'
import { memo } from 'react'
import { useGetBcsD } from "../../../hooks/useGetBcsD"

const BcsDComponent = ({ chain, boolean }) => {
  const binarie = useGetBcsD(chain, boolean) || ''

  return (
    <article>
      <p>En BCS: {chain ? binarie : ''}</p>
    </article>
  )
}

const MemoizedBcsDComponent = memo(BcsDComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedBcsDComponent
