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

  return (
    <article>
      <h3>Compuerta NAND</h3>
      <InputGates handleInput={handleInput} n="1" name="oneNand" value={input.oneNand} key="oneNand" cleanInput={() => cleanInput("oneNand")} />
      <InputGates handleInput={handleInput} n="2" name="twoNand" value={input.twoNand} key="twoNand" cleanInput={() => cleanInput("twoNand")} />
      <OutputNand one={input.oneNand} two={input.twoNand} key="outputNand" />
    </article>
  )
}

export default Nand
