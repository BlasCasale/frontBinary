import { useState } from "react"
import InputGates from "../../InputGates/InputGates"
import OutputNand from "./OutputNand"

const Nand = () => {

  const [input, setInput] = useState({ oneNand: "", twoNand: "" })

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
      <h3>Compuerta NAND</h3>
      <InputGates handleInput={handleInput} n={"1"} name={"oneNand"} value={input.oneNand} key={"oneNand"} />
      <InputGates handleInput={handleInput} n={"2"} name={"twoNand"} value={input.twoNand} key={"twoNand"} />
      <OutputNand one={input.oneNand} two={input.twoNand} key={"outputNand"} />
    </article>
  )
}

export default Nand