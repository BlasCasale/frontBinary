import { useGetNot } from "../../../hooks/useGetNot"
import { useGetXor } from "../../../hooks/useGetXor"
import { badResponse, sameLength } from "../../../utils/data"

const OutputXnor = ({ one, two }) => {

  const value = useGetXor(one, two)

  const newValue = useGetNot(value)

  return (
    <p>{!one && !two ? sameLength : newValue ? newValue : badResponse}</p>
  )
}

export default OutputXnor