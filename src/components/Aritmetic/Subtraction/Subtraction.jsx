import React from "react"
import { useState, useCallback } from "react"
import InputGates from "../../InputGates/InputGates"
import OutputSub from "./OutputSub"

const Subtraction = () => {
  const [input, setInput] = useState({ oneSub: "", twoSub: "" })

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
      <h4>Resta binaria</h4>
      <InputGates handleInput={handleInput} n="1" name="oneSub" value={input.oneSub} key="oneSub" cleanInput={() => cleanInput("oneSub")} />
      <InputGates handleInput={handleInput} n="2" name="twoSub" value={input.twoSub} key="twoSub" cleanInput={() => cleanInput("twoSub")} />
      <OutputSub one={input.oneSub} two={input.twoSub} key="outputSub" />
    </article>
  )
}

export default Subtraction
