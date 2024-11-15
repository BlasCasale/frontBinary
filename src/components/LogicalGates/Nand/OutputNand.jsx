import { useGetNand } from "../../../hooks/useGetNand"
import { badResponse, sameLength } from '../../../utils/data'

const OutputNand = ({ one, two }) => {
  const value = useGetNand(one, two)

  return (
    <p>{!one && !two ? sameLength : value ? value : badResponse}</p>
  )
}

export default OutputNand
