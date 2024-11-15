import { useState, useCallback } from "react"
import InputGates from "../../InputGates/InputGates"
import OutputAnd from "./OutputAnd"

const And = () => {
    const [input, setInput] = useState({ one: "", two: "" })

    const handleInput = useCallback((e) => {
        const { name, value } = e.target
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
            <h4>Compuerta AND</h4>
            <InputGates handleInput={handleInput} name="one" value={input.one} n="1" key="one" cleanInput={() => cleanInput("one")} />
            <InputGates handleInput={handleInput} name="two" value={input.two} n="2" key="two" cleanInput={() => cleanInput("two")} />
            <OutputAnd one={input.one} two={input.two} key="output" />
        </article>
    )
}

export default And
