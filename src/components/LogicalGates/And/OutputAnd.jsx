import React from 'react'
import { useCallback, memo } from 'react'
import { useGetAnd } from '../../../hooks/useGetAnd'
import { sameLength, badResponse } from '../../../utils/data'
import { FaCopy } from 'react-icons/fa'

const OutputAnd = ({ one, two }) => {
    const value = useGetAnd(one, two)

    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(value)
    }, [value])

    return (
        <div className='boxClipboard'>
            <p>{!one && !two ? sameLength : value ? "Respuesta: " + value : badResponse}</p>
            {one && two && one.length === two.length && <FaCopy onClick={copyToClipboard} />}
        </div>
    )
}

const OutputAndMemo = memo(OutputAnd, (prev, next) => prev.one === next.one && prev.two === next.two)

export default OutputAndMemo
