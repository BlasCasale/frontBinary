import { useState } from "react"
import InputGates from "../../InputGates/InputGates"
import OutputNot from "./OutputNot"

const Not = () => {
  const [input, setInput] = useState("")

  const handleInput = (e) => {
    const newChain = e.target.value.replace(/[^01]/g, "")

    setInput(newChain)
  }

  return (
    <article>
      <h3>Compuerta NOT</h3>
      <InputGates handleInput={handleInput} name={"not"} value={input} n={"1"} key={"not"} />
      <OutputNot chain={input} key={"outputNot"} />
    </article>
  )
}

export default Not