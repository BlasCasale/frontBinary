import { useState } from "react"
import InputGates from "../../InputGates/InputGates"
import OutputXnor from "./OutputXnor"

const Xnor = () => {

  const [input, setInput] = useState({ oneXnor: "", twoXnor: "" })

  const handleInput = (e) => {
    const { name, value } = e.target

    const newChain = value.replace(/[^01]/g, "")

    setInput((prev) => ({
      ...prev,
      [name]: newChain
    }))
  }

  return (
    <article>
      <h4>Compuerta XNOR</h4>
      <InputGates handleInput={handleInput} n={"1"} name={"oneXnor"} value={input.oneXnor} key={"oneXnor"} />
      <InputGates handleInput={handleInput} n={"2"} name={"twoXnor"} value={input.twoXnor} key={"twoXnor"} />
      <OutputXnor one={input.oneXnor} two={input.twoXnor} key={"outputXnor"} />
    </article>
  )
}

export default Xnor