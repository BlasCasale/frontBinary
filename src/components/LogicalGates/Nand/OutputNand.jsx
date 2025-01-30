import React from "react"
import { useGetNand } from "../../../hooks/useGetNand"
import { badResponse, sameLength } from '../../../utils/data'
import { useCallback, memo } from "react"
import { FaCopy } from "react-icons/fa"

const OutputNand = ({ one, two }) => {
  const value = useGetNand(one, two)

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(value)
  }, [value])

  return (
    <div className="boxClipboard">
      <p>{!one && !two ? sameLength : value ? "Respuesta: " + value : badResponse}</p>
      {one && two && one.length === two.length && <FaCopy onClick={copyToClipboard} />}
    </div>
  )
}

const OutputNandMemo = memo(OutputNand, (prev, next) => prev.one === next.one && prev.two === next.two)

export default OutputNandMemo
