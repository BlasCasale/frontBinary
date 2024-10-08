import { useState } from "react"
import InputGates from "../../InputGates/InputGates"
import OutputSub from "./OutputSub"

const Subtraction = () => {

  const [input, setInput] = useState({ oneSub: "", twoSub: "" })

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
      <h4>Resta binaria</h4>
      <InputGates handleInput={handleInput} n={"1"} name={"oneSub"} value={input.oneSub} key={"oneSub"} />
      <InputGates handleInput={handleInput} n={"2"} name={"twoSub"} value={input.twoSub} key={"twoSub"} />
      <OutputSub one={input.oneSub} two={input.twoSub} key={"outputSub"} />
    </article>
  )
}

export default Subtraction