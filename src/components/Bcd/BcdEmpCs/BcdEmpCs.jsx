import React from "react"
import { useState, useCallback, memo } from "react"
import { useGetBcdEmpCs } from "../../../hooks/useGetBcdEmpCs"
import Input from "../../Input/Input"
import ExplanationBcdDesCsMemoized from "./ExplanationBcdEmpCs"

const BcdEmpCsComponent = () => {
  const [inputR, setInputR] = useState("")
  const [chain, setChain] = useState("")

  const boolean = inputR[0] !== "-"

  const handleInput = useCallback((e) => {
    const input = e.target.value
    const newChain = input[0] === "-"
      ? input.slice(1).replace(/[^0-9]/g, "")
      : input.replace(/[^0-9]/g, "")

    const newInput = input[0] === "-"
      ? '-' + input.slice(1).replace(/[^0-9]/g, "")
      : input.replace(/[^0-9]/g, "")

    setInputR(newInput)
    setChain(newChain)
  }, [])

  const cleanInput = useCallback(() => {
    setInputR("")
    setChain("")
  }, [])

  const binarie = useGetBcdEmpCs(chain, boolean)

  return (
    <section className="cardBinaries">
      <h4>BCD empaquetado con signo</h4>
      <Input
        handleInput={handleInput}
        message={"Número con signo:"}
        name={"bcdEmpCs"}
        value={inputR}
        key={"bcdEmpCs"}
        cleanInput={cleanInput}
      />
      <p>Binario: {binarie}</p>
      <ExplanationBcdDesCsMemoized number={chain} key={'explanationBcdEmpCs'}/>
    </section>
  )
}

const MemoizedBcdEmpCsComponent = memo(BcdEmpCsComponent)

export default MemoizedBcdEmpCsComponent
