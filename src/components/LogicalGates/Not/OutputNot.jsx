import { useGetNot } from "../../../hooks/useGetNot"

const OutputNot = ({ chain }) => {

  const value = useGetNot(chain)

  return (
    <p>{chain ? value : "Debe ingresarse una cadena para hacer la operación NOT"}</p>
  )
}

export default OutputNot