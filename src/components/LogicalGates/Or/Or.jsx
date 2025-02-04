import React from "react"
import { useCallback, useState } from "react"
import InputGates from "@components/InputGates/InputGates"
import OutputOr from "./OutputOr"
import imgOr from "../../../assets/OR.webp"

const Or = () => {

  const [input, setInput] = useState({ oneOr: "", twoOr: "" })

  const handleInput = useCallback((e) => {
    const { name, value } = e.target

    // Remueve cualquier caracter que no sea 0 o 1
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
      <h4>Compuerta OR</h4>
      <InputGates handleInput={handleInput} name={"oneOr"} value={input.oneOr} n={"1"} key={"oneOr"} cleanInput={() => cleanInput("oneOr")} />
      <InputGates handleInput={handleInput} name={"twoOr"} value={input.twoOr} n={"2"} key={"twoOr"} cleanInput={() => cleanInput("twoOr")} />
      <OutputOr key={"outputOr"} one={input.oneOr} two={input.twoOr} />
      <img src={imgOr} alt="Tabla de verdad OR" />
    </article>
  )
}

export default Or