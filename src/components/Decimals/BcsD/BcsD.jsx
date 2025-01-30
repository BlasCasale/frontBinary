import React from 'react'
import { memo, useState, useCallback } from 'react'
import { useGetBcsD } from "../../../hooks/useGetBcsD"
import TFDLA from '../../Binaries/TFDLA/TFDLA'
import BoxShownEye from '../../Binaries/BoxShownEye/BoxShownEye'

const BcsDComponent = ({ chain, boolean }) => {
  const binarie = useGetBcsD(chain, boolean) || ''

  const [shown, setShown] = useState(false)

  const handleShown = useCallback(() => {
    setShown((prev) => !prev)
  }, [shown])

  const answer = boolean ? '0 en caso de que el número a representar sea positivo.' : '1 en caso de que el número a representar sea negativo'

  return (
    <article className='cardBinaries'>
      <p>En BCS: {chain ? binarie : ''}</p>
      <TFDLA chain={binarie.slice(1)} key={'explanationBcsD'} />
      <BoxShownEye handleShown={handleShown} shown={shown} />
      {shown && <p className='pDecimal'>Explicación de la cadena: Hecho previamente la representación del número en BSS, debemos agregar un bit mas al comienzo de la cadena siendo {answer}</p>}

    </article>
  )
}

const MemoizedBcsDComponent = memo(BcsDComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain && prevProps.boolean === nextProps.boolean)

export default MemoizedBcsDComponent
