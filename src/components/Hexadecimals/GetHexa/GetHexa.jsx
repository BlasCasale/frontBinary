import React from "react"
import { useState, useCallback, memo } from "react"
import { useGetHexadecimal } from "../../../hooks/useGetHexadecimal"
import Input from "../../Input/Input"

const GetHexaComponent = () => {
  const [input, setInput] = useState("")

  const handleInput = useCallback((e) => {
    const value = e.target.value
    const newChain = value.replace(/[^01]/g, "")
    setInput(newChain)
  }, [])

  const cleanInput = useCallback(() => {
    setInput("")
  }, [])

  const hexa = useGetHexadecimal(input)

  return (
    <article>
      <h4>De binario a hexadecimal</h4>
      <Input
        handleInput={handleInput}
        message={"Binario:"}
        name={"binarieToHexa"}
        value={input}
        key={"binarieToHexa"}
        cleanInput={cleanInput}
      />
      <p>Cadena en hexadecimal: {hexa}</p>
    </article>
  )
}
const MemoizedGetHexa = memo(GetHexaComponent)

export default MemoizedGetHexa
