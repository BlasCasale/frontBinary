import React from 'react'
import { memo } from 'react'
import { useGetBssB } from "../../../hooks/useGetBssB"
import TDFLAMemoized from '../TFDLA/TFDLA'
import './BssB.css'

const BssBComponent = ({ chain }) => {
  const info = useGetBssB(chain) || {}
  const { num = '', max = '' } = info

  return (
    <article className='cardBinaries'>
      <h4>BSS</h4>
      <p>El número interpretado en BSS es: {num}</p>
      <p>Máximo número representable en BSS: {max}</p>
      <TDFLAMemoized chain={chain} key={'TDFLA'}/>
      <p>Explicación del sistema: En BSS al no estar el signo, todos los bits que pertenezcan a la cadena serán interpretados como números.</p>
    </article >
  )
}

const MemoizedBssBComponent = memo(BssBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)

export default MemoizedBssBComponent