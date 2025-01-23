import React from 'react'
import { memo } from 'react'
import { useGetExcD } from "../../../hooks/useGetExcD"
import TFDLA from '../../Binaries/TFDLA/TFDLA'

const ExcDComponent = ({ chain, boolean }) => {
  const binarie = useGetExcD(chain, boolean) || ''

  return (
    <article>
      <p>En Exc: {chain ? binarie : ''}</p>
      <TFDLA chain={binarie} key={'explanationEx2D'} />
    </article >
  )
}

const MemoizedExcDComponent = memo(ExcDComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedExcDComponent