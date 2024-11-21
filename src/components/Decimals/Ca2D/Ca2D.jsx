import React from 'react'
import { memo } from 'react'
import { useGetCa2D } from "../../../hooks/useGetCa2D"

const Ca2DComponent = ({ chain, boolean }) => {
  const binarie = useGetCa2D(chain, boolean) || ''

  return (
    <article>
      <p>En Ca2: {chain ? binarie : ''}</p>
    </article>
  )
}

const MemoizedCa2DComponent = memo(Ca2DComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedCa2DComponent