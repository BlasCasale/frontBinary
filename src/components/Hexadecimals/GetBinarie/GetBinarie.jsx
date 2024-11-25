import React from "react"
import { useState, useCallback, memo } from "react"
import { useGetBinarie } from "../../../hooks/useGetBinarie"
import Input from "../../Input/Input"

const GetBinarieComponent = () => {
  const [input, setInput] = useState("")

  const handleInput = useCallback((e) => {
    const value = e.target.value.toUpperCase()
    const newChain = value.replace(/[^0-9A-F]/g, "")

    setInput(newChain)
  }, [])

  const cleanInput = useCallback(() => {
    setInput("")
  }, [])

  const binarie = useGetBinarie(input)

  return (
    <div>
      <h4>De hexadecimal a binario</h4>
      <Input
        handleInput={handleInput}
        message={"Hexadecimal:"}
        name={"hexaToBinarie"}
        value={input}
        key={"hexaToBinarie"}
        cleanInput={cleanInput}
      />
      <p>Cadena en binario: {binarie}</p>
    </div>
  )
}

const MemoizedGetBinarieComponent = memo(GetBinarieComponent)

export default MemoizedGetBinarieComponent
