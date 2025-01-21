import React from 'react'
import { memo } from 'react'
import { useGetBcsD } from "../../../hooks/useGetBcsD"
import TFDLA from '../../Binaries/TFDLA/TFDLA'

const BcsDComponent = ({ chain, boolean }) => {
  const binarie = useGetBcsD(chain, boolean) || ''

  const answer = boolean ? '0 en caso de que el número a representar sea positivo.' : '1 en caso de que el número a representar sea negativo'

  return (
    <article>
      <p>En BCS: {chain ? binarie : ''}</p>
      <TFDLA chain={binarie.slice(1)} key={'explanationBcsD'} />
      <p>Explicación de la cadena: Hecho previamente la representación del número en BSS, debemos agregar un bit mas al comienzo de la cadena siendo {answer}</p>
    </article>
  )
}

const MemoizedBcsDComponent = memo(BcsDComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedBcsDComponent
