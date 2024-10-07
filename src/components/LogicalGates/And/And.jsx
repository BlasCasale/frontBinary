import { useState } from "react"
import InputGates from "../../InputGates/InputGates"
import OutputAnd from "./OutputAnd"

const And = () => {
    const [input, setInput] = useState({ one: "", two: "" })

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
            <h4>Compuerta AND</h4>
            <InputGates handleInput={handleInput} name="one" value={input.one} n={"1"} key={"one"} />
            <InputGates handleInput={handleInput} name="two" value={input.two} n={"2"} key={"two"} />
            <OutputAnd one={input.one} two={input.two} key={"output"} />
        </article>
    )
}

export default And