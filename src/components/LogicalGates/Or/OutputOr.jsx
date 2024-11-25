import React from 'react'
import { useGetOr } from '@hooks/useGetOr'
import { sameLength, badResponse } from '@utils/data'

const OutputOr = ({ one, two }) => {

  const value = useGetOr(one, two)

  return (
    <p>{!one && !two ? sameLength : value ? "Respuesta: " + value : badResponse}</p>
  )
}

export default OutputOr