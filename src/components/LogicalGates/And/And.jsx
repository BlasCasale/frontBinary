import { useState } from "react"
import InputGates from "../../InputGates/InputGates"

const And = () => {
    const [input, setInput] = useState({ one: "", two: "" })

    const handleInput = (e) => {
        const { name } = e.target
        let { value } = e.target
        let newChain = ""

        for (let i = 0; i < value.lenght; i++) {
            if (value[i] === "1" || value[i] === "0") newChain += value[i]
        }

        setInput((prev) => ({
            ...prev,
            [name]: newChain
        }))
    }

    return (
        <article>
            <InputGates handleInput={handleInput} name="one" value={input.one} />
            <InputGates handleInput={handleInput} name="two" value={input.two} />
            
        </article>
    )
}

export default And