import React from "react"
import { useGetXor } from "../../../hooks/useGetXor"
import { badResponse, sameLength } from "../../../utils/data"

const OutputXor = ({ one, two }) => {

  const value = useGetXor(one, two)

  return (
    <p>{!one && !two ? sameLength : value ? "Respuesta: " + value : badResponse}</p>
  )
}

export default OutputXor