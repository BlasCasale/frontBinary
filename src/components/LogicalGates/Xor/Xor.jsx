import React from "react"
import { useCallback, useState } from "react"
import InputGates from "../../InputGates/InputGates"
import OutputXor from "./OutputXor"

const Xor = () => {

  const [input, setInput] = useState({ oneXor: "", twoXor: "" })

  const handleInput = useCallback((e) => {
    const { value, name } = e.target

    const newChain = value.replace(/[^01]/g, "")

    setInput((prev) => ({
      ...prev,
      [name]: newChain
    }))
  }, [])

  const cleanInput = useCallback((field) => {
    setInput(prev => ({
      ...prev, [field]: ""
    }))
  }, [])

  return (
    <article className="cardBinaries">
      <h4>Compuerta XOR</h4>
      <InputGates handleInput={handleInput} n={"1"} name={"oneXor"} value={input.oneXor} key={"oneXor"} cleanInput={() => cleanInput("oneXor")} />
      <InputGates handleInput={handleInput} n={"2"} name={"twoXor"} value={input.twoXor} key={"twoXor"} cleanInput={() => cleanInput("twoXor")} />
      <OutputXor one={input.oneXor} two={input.twoXor} key={"outputXor"} />
      <img src={'src/assets/XOR.webp'} alt="Tabla de verdad XOR" />
    </article >
  )
}

export default Xor