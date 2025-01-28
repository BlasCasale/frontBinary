import React from "react"
import { useGetNot } from "../../../hooks/useGetNot"
import { useCallback, memo } from "react"
import { FaCopy } from "react-icons/fa"

const OutputNot = ({ chain }) => {

  const value = useGetNot(chain)

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(value)
  }, [value])

  return (
    <div className="boxClipboard">
      <p>{chain ? value : "Debe ingresarse una cadena para hacer la operación NOT"}</p>
      {value && <FaCopy onClick={copyToClipboard} />}
    </div>
  )
}

const OutputNotMemoized = memo(OutputNot, (prev, next) => prev.chain === next.chain)

export default OutputNotMemoized