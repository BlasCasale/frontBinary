import { useState } from 'react'
import InputGates from '../../InputGates/InputGates'
import Outputadd from './Outputadd'

const Add = () => {

  const [input, setInput] = useState({ addOne: "", addTwo: "" })

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
      <h4>Suma binaria</h4>
      <InputGates handleInput={handleInput} n={"1"} name={"addOne"} value={input.addOne} key={"addOne"} />
      <InputGates handleInput={handleInput} n={"2"} name={"addTwo"} value={input.addTwo} key={"addTwo"} />
      <Outputadd one={input.addOne} two={input.addTwo} key={"outputAdd"} />
    </article>
  )
}

export default Add