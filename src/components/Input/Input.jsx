import Trash from '../Trash/Trash'

const Input = ({ handleInput, value, name, message }) => {
  return (
    <div>
      <div>
        <label htmlFor={name}>{message}</label>
        <div className="boxInput">
          <input type="text" id={name} name={name} onChange={handleInput} value={value} />
          <Trash />
        </div>
      </div>
    </div>
  )
}

export default Input