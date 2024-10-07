import { useGetAnd } from '../../../hooks/useGetAnd'
import { sameLength, badResponse } from '../../../utils/data'

const OutputAnd = ({ one, two }) => {

    const value = useGetAnd(one, two)

    return (
        <p>{!one && !two ? sameLength : value ? value : badResponse}</p>
    )
}

export default OutputAnd