import React from 'react'
import { memo } from 'react'
import { useGetBssD } from '../../../hooks/useGetBssD'

const Ca2DExplanation = ({ chain, ca2, boolean }) => {
  const answer = boolean ? ' los positivos debemos agregar un 0 delante de la cadena para que nuestra cadena binaria represente al positivo deseado.' : ' los negativos debemos agregar invertir todos los bits posteriores al primer 1 que encontremos en nuestra cadena y luego agregar un 1 delante para completar el módulo del número interpretado.'

  const bss = useGetBssD(chain)

  return (
    <div>
      <p>Explicación del sistema: partiendo de nuestra cadena obtenida en BSS, debemos tener en claro que para escribir {answer}</p>
      {!boolean && <p>Partiendo de nuestra cadena {bss} hacemos la operación NOT después del primer bit en 1 que encontremos y luego agregamos el bit en 1 para asignarle el módulo. Como resultado nos quedara la cadena {ca2}.</p>}
    </div>
  )
}

const Ca2DExplanationMemoized = memo(Ca2DExplanation, (prev, next) => {
  return prev.boolean === next.boolean && prev.ca2 === next.ca2 && prev.chain === next.chain
})

export default Ca2DExplanationMemoized