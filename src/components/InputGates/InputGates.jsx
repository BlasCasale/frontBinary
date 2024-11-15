import MemoizedTrash from "../Trash/Trash"

const InputGates = ({ handleInput, name, value, n, cleanInput }) => {
    return (
        <div>
            <label htmlFor={name}>Cadena n° {n}:</label>
            <div className="inputBox">
                <input type="text" id={name} name={name} onChange={handleInput} value={value} />
                <MemoizedTrash cleanInput={cleanInput} />
            </div>
        </div>
    )
}

export default InputGates