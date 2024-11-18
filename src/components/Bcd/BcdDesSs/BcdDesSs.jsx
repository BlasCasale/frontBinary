import React from "react"
import { useState, useCallback, memo } from "react"
import { numbers } from "../../../utils/data"
import { useGetBcdDesSs } from "../../../hooks/useGetBcdDesSs"
import Input from "../../Input/Input"

const BcdDesSsComponent = () => {
  const [inputR, setInputR] = useState("")
  const [chain, setChain] = useState("")

  const handleInput = useCallback((e) => {
    const input = e.target.value
    const newChain = input.split("").filter(char => numbers[char]).join("")

    setInputR(newChain)
    setChain(newChain)
  }, [])

  const cleanInput = useCallback(() => {
    setChain("")
    setInputR("")
  }, [])

  const binarie = useGetBcdDesSs(chain)

  return (
    <article>
      <h4>BCD desempaquetado sin signo</h4>
      <Input
        handleInput={handleInput}
        message={"Numero sin signo:"}
        name={"bcdDesSs"}
        value={inputR}
        key={"bcdDesSs"}
        cleanInput={cleanInput}
      />
      <p>Binario: {binarie}</p>
    </article>
  )
}

const MemoizedBcdDesSsComponent = memo(BcdDesSsComponent)

export default MemoizedBcdDesSsComponent
