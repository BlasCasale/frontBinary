import { useGetXor } from "../../../hooks/useGetXor"
import { badResponse, sameLength } from "../../../utils/data"

const OutputXor = ({ one, two }) => {

  const value = useGetXor(one, two)

  return (
    <p>{!one && !two ? sameLength : value ? value : badResponse}</p>
  )
}

export default OutputXor