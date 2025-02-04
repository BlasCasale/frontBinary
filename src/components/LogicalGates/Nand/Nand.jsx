import React from "react"
import { useState, useCallback } from "react"
import InputGates from "../../InputGates/InputGates"
import OutputNand from "./OutputNand"

const Nand = () => {
  const [input, setInput] = useState({ oneNand: "", twoNand: "" })

  const handleInput = useCallback((e) => {
    const { value, name } = e.target
    const newChain = value.replace(/[^01]/g, "")
    setInput(prev => ({
      ...prev,
      [name]: newChain
    }))
  }, [])

  const cleanInput = useCallback((field) => {
    setInput(prev => ({
      ...prev, [field]: ""
    }))
  }, [])

  const copyToClipboard = useCallback((field) => {
    navigator.clipboard.writeText(input[field])
  }, [input])

  return (
    <article className="cardBinaries">
      <h3>Compuerta NAND</h3>
      <InputGates handleInput={handleInput} n="1" name="oneNand" value={input.oneNand} key="oneNand" cleanInput={() => cleanInput("oneNand")} copyToClipboard={copyToClipboard} field={"oneNand"} />
      <InputGates handleInput={handleInput} n="2" name="twoNand" value={input.twoNand} key="twoNand" cleanInput={() => cleanInput("twoNand")} copyToClipboard={copyToClipboard} field={"twoNand"} />
      <OutputNand one={input.oneNand} two={input.twoNand} key="outputNand" />
      <img src={'src/assets/NAND.webp'} alt="Tabla de verdad NAND" />
    </article>
  )
}

export default Nand
