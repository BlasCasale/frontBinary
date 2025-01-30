import React from 'react'
import { memo } from 'react'

const BssDExplanation = ({ number, binary }) => {

  const maxIndex = binary.length - 1

  let string = ''

  return (
    <div className='boxExplanation'>
      <p>Analizaremos paso a paso como representamos la cadena: </p>
      <div className='boxExplanationDecimal'>
        {
          number === Math.pow(2, maxIndex) && binary.slice(1).every((c) => c === '0') ?
            <p key={`bssChar0`}>Dado que {Math.pow(2, maxIndex)} es igual al número que buscamos representar, debemos colocar un 1 y luego colocar {maxIndex} 0 a la derecha para completar nuestra cadena binaria.</p>
            :
            <>
              {
                binary.split('').map((char, i) => {
                  if (char === '1') {
                    let num = number
                    number = number - Math.pow(2, maxIndex - i)
                    string += `dado que ${Math.pow(2, maxIndex - i)} <= ${num} entonces procederemos a hacer la siguiente operación ${Math.pow(2, maxIndex - i)} - ${num} y colocaremos un 1 en el indice ${maxIndex - i}, `
                  } else {
                    string += `dado que ${Math.pow(2, maxIndex - i)} > ${number}, colocaremos un 0 en el indice ${maxIndex - i}${maxIndex === i ? '.' : ', '}`
                  }
                })
              }
              <p>{string}</p>
            </>
        }
      </div>
    </div>
  )
}

const BssDExplanationMemoized = memo(BssDExplanation, (prev, next) => prev.number === next.number)

export default BssDExplanationMemoized