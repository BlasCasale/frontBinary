import { useState } from "react"
import InputGates from "../../InputGates/InputGates"
import OutputXor from "./OutputXor"

const Xor = () => {

  const [input, setInput] = useState({ oneXor: "", twoXor: "" })

  const handleInput = (e) => {
    const { value, name } = e.target

    const newChain = value.replace(/[^01]/g, "")

    setInput((prev) => ({
      ...prev,
      [name]: newChain
    }))
  }

  return (
    <article>
      <h4>Compuerta XOR</h4>
      <InputGates handleInput={handleInput} n={"1"} name={"oneXor"} value={input.oneXor} key={"oneXor"} />
      <InputGates handleInput={handleInput} n={"2"} name={"twoXor"} value={input.twoXor} key={"twoXor"} />
      <OutputXor one={input.oneXor} two={input.twoXor} key={"outputXor"} />
    </article >
  )
}

export default Xor