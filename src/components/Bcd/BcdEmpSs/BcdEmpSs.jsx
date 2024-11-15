import { useState, useCallback, memo } from "react"
import { useGetBcdEmpSs } from "../../../hooks/useGetBcdEmpSs"
import Input from "../../Input/Input"

const BcdEmpSsComponent = () => {
  const [number, setNumber] = useState("")
  const [chain, setChain] = useState("")

  const handleInput = useCallback((e) => {
    const input = e.target.value
    const newChain = input.replace(/[^0-9]/g, "")
    setNumber(newChain)
    setChain(newChain)
  }, [])

  const binarie = useGetBcdEmpSs(chain)

  const cleanInput = useCallback(() => {
    setNumber("")
    setChain("")
  }, [])

  return (
    <article>
      <h4>BCD empaquetado sin signo</h4>
      <Input
        handleInput={handleInput}
        message={"Número:"}
        name={"bcdEmpSs"}
        value={number}
        key={"bcdEmpSs"}
        cleanInput={cleanInput}
      />
      <p>Binario: {binarie}</p>
    </article>
  )
}

const MemoizedBcdEmpSsComponent = memo(BcdEmpSsComponent)

export default MemoizedBcdEmpSsComponent