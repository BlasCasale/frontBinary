
const InputGates = ({ handleInput, name, value, n }) => {
    return (
        <div>
            <label htmlFor={name}>Cadena n° {n}:</label>
            <input type="text" id={name} name={name} onChange={handleInput} value={value} />
        </div>
    )
}

export default InputGates