import React from "react"
import MemoizedTrash from "../Trash/Trash"
import { FaCopy } from "react-icons/fa"

const InputGates = ({ handleInput, name, value, n, cleanInput, copyToClipboard, field }) => {
    return (
        <div>
            <label htmlFor={name}>Cadena n° {n}:</label>
            <div className="inputBox">
                <input type="text" id={name} name={name} onChange={handleInput} value={value} />
                <MemoizedTrash cleanInput={cleanInput} />
                <FaCopy key={`${name}${n}`} onClick={() => copyToClipboard(field)} />
            </div>
        </div>
    )
}

export default InputGates