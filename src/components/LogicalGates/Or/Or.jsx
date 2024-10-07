import { useState } from "react"
import InputGates from "../../InputGates/InputGates"
import OutputOr from "./OutputOr"

const Or = () => {

  const [input, setInput] = useState({ oneOr: "", twoOr: "" })

  const handleInput = (e) => {
    const { name, value } = e.target

    // Remueve cualquier caracter que no sea 0 o 1
    const newChain = value.replace(/[^01]/g, "")

    setInput((prev) => ({
      ...prev,
      [name]: newChain
    }))
  }

  return (
    <article>
      <h4>Compuerta OR</h4>
      <InputGates handleInput={handleInput} name={"oneOr"} value={input.one} n={"1"} key={"oneOr"} />
      <InputGates handleInput={handleInput} name={"twoOr"} value={input.twoOr} n={"2"} key={"twoOr"} />
      <OutputOr key={"outputOr"} one={input.oneOr} two={input.twoOr} />
    </article>
  )
}

export default Or