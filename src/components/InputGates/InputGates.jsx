
const InputGates = ({ handleInput, name, value }) => {
    return (
        <div>
            <label htmlFor={name}>Cadena n° 1:</label>
            <input type="text" name={name} onChange={handleInput} value={value} />
        </div>
    )
}

export default InputGates