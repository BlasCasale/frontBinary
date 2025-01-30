import React from 'react'
import { memo } from 'react'
import { useGetNot } from '../../../hooks/useGetNot'

const Ca1DExplanation = ({ boolean, chain }) => {

  const answer = boolean ? 'positivo debemos agregar un 0 al inicio de la cadena.' : 'negativo debemos agregar un 1 al inicio de la cadena e invertir todos los bits del número.'

  const notChain = useGetNot(chain)

  return (
    <>
      {
        chain &&
        < div className='boxExplanation' >
          <p>Nuevamente partiremos desde la cadena representada en BSS y en caso de que el número sea {answer}</p>
          {!boolean && <p>Entonces ya con la cadena conformada {notChain.slice(1)} en BSS y agregandole un 0 delante, podremos obtener haciendo una operación NOT la cadena que deseamos representar {chain}.</p>}
        </div >

      }
    </>
  )
}

const Ca1DExplanationMemoized = memo(Ca1DExplanation, (prev, next) => {
  return prev.boolean === next.boolean && prev.chain === next.chain
})

export default Ca1DExplanationMemoized