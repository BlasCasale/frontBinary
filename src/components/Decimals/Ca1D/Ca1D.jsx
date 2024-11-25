import React from 'react'
import { memo } from 'react'
import { useGetCa1D } from "../../../hooks/useGetCa1D"

const Ca1DComponent = ({ chain, boolean }) => {
  const binarie = useGetCa1D(chain, boolean) || ''

  return (
    <article>
      <p>En Ca1: {chain ? binarie : ''}</p>
    </article>
  )
}

const MemoizedCa1DComponent = memo(Ca1DComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedCa1DComponent