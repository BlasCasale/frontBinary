import { useState, useCallback, memo } from "react"
import { useGetBcdDesCs } from "../../../hooks/useGetBcdDesCs"
import Input from "../../Input/Input"

const BcdDesCsComponent = () => {
  const [input, setInput] = useState("")
  const [chain, setChain] = useState("")

  const boolean = input[0] !== "-"

  const handleInput = useCallback((e) => {
    const value = e.target.value
    const isNegative = value[0] === "-"
    const newChain = isNegative
      ? value.slice(1).replace(/[^0-9]/g, "")
      : value.replace(/[^0-9]/g, "")

    setInput(value)
    setChain(newChain)
  }, [])

  const cleanInput = useCallback(() => {
    setChain("")
    setInput("")
  }, [])

  const binarie = useGetBcdDesCs(chain, boolean)

  return (
    <article>
      <h4>BCD desempaquetado con signo</h4>
      <Input
        handleInput={handleInput}
        message={"Número con signo:"}
        name={"BcdDesCs"}
        value={input}
        key={"BcdDesCs"}
        cleanInput={cleanInput}
      />
      <p>Binario: {binarie}</p>
    </article>
  )
}

const MemoizedBcdDesCsComponent = memo(BcdDesCsComponent)

export default MemoizedBcdDesCsComponent
