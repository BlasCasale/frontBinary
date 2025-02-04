import React from "react"
import { useState, useCallback } from "react"
import InputGates from "../../InputGates/InputGates"
import OutputAnd from "./OutputAnd"
import imgAnd from "../../../assets/AND.webp"

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

    const copyToClipboard = useCallback((field) => {
        navigator.clipboard.writeText(input[field])
    }, [input])

    return (
        <article className="cardBinaries">
            <h4>Compuerta AND</h4>
            <InputGates handleInput={handleInput} name="one" value={input.one} n="1" key="one" cleanInput={() => cleanInput("one")} copyToClipboard={copyToClipboard} field={"one"} />
            <InputGates handleInput={handleInput} name="two" value={input.two} n="2" key="two" cleanInput={() => cleanInput("two")} copyToClipboard={copyToClipboard} field={"two"} />
            <OutputAnd one={input.one} two={input.two} key="output" copyToClipboard={copyToClipboard} />
            <img src={imgAnd} alt="Tabla de verdad AND" />
        </article>
    )
}

export default And
