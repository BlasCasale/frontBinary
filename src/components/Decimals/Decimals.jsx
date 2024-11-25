import React from "react"
import { useState, useCallback, memo } from "react"
import MemoizedBssDComponent from "./BssD/BssD"
import MemoizedBcsDComponent from "./BcsD/BcsD"
import MemoizedCa1DComponent from "./Ca1D/Ca1D"
import MemoizedCa2DComponent from "./Ca2D/Ca2D"
import MemoizedExcDComponent from "./ExcD/ExcD"
import './Decimals.css'
import Input from "../Input/Input"

const MemoizedBssD = memo(MemoizedBssDComponent, (prevProp, nextProp) => prevProp.chain === nextProp.chain)
const MemoizedBcsD = memo(MemoizedBcsDComponent, (prevProp, nextProp) => prevProp.chain === nextProp.chain)
const MemoizedCa1D = memo(MemoizedCa1DComponent, (prevProp, nextProp) => prevProp.chain === nextProp.chain)
const MemoizedCa2D = memo(MemoizedCa2DComponent, (prevProp, nextProp) => prevProp.chain === nextProp.chain)
const MemoizedExcD = memo(MemoizedExcDComponent, (prevProp, nextProp) => prevProp.chain === nextProp.chain)

const Decimals = () => {
  const [input, setInput] = useState("")

  const boolean = input[0] !== "-"

  const handleInput = useCallback((e) => {
    let value = e.target.value

    const newChain = value.match(/^-?\d*/)[0]

    setInput(newChain)
  }, [])

  const cleanInput = useCallback(() => {
    setInput("")
  }, [])


  return (
    <section className="sectionDecimals">
      <h2>Decimal a binario</h2>
      <Input
        handleInput={handleInput}
        message={"Decimal:"}
        name={"decimalToBinarie"}
        value={input}
        key={"decimalToBinarie"}
        cleanInput={cleanInput}
      />
      <MemoizedBssD key={"bss"} chain={input} boolean={boolean} />
      <MemoizedBcsD key={"bcs"} chain={input} boolean={boolean} />
      <MemoizedCa1D key={"ca1"} chain={input} boolean={boolean} />
      <MemoizedCa2D key={"ca2"} chain={input} boolean={boolean} />
      <MemoizedExcD key={"exc"} chain={input} boolean={boolean} />
    </section>
  )
}

export default Decimals