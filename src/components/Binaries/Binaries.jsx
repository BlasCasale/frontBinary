import React from "react"
import { useState, useCallback, memo, useMemo } from "react"
import MemoizedBssBComponent from "./BssB/BssB"
import MemoizedBcsBComponent from "./BcsB/BcsB"
import MemoizedCa1BComponent from "./Ca1B/Ca1B"
import MemoizedCa2BComponent from "./Ca2B/Ca2B"
import MemoizedExcBComponent from "./ExcB/ExcB"
import './Binaries.css'
import Input from "../Input/Input";

const MemoizedBssB = memo(MemoizedBssBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)
const MemoizedBcsB = memo(MemoizedBcsBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)
const MemoizedCa1B = memo(MemoizedCa1BComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)
const MemoizedCa2B = memo(MemoizedCa2BComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)
const MemoizedExcB = memo(MemoizedExcBComponent, (prevProps, nextProps) => prevProps.chain === nextProps.chain)


const Binaries = () => {
  const [input, setInput] = useState("");

  const handleInput = useCallback((e) => {
    let input = e.target.value

    const newChain = input.replace(/[^01]/g, "")

    setInput(newChain);
  }, [])

  const chain = useMemo(() => {
    return input.replace(/[^01]/g, '')
  }, [input])

  const cleanInput = useCallback(() => {
    setInput("")
  }, [])

  return (
    <section className="sectionBinaries">
      <h2>Sistemas binarios</h2>
      <Input handleInput={handleInput} message={"Cadena binaria:"} name={"binarie"} value={input} key={"binarie"} cleanInput={cleanInput} />
      <MemoizedBssB key={"bss"} chain={chain} />
      <MemoizedBcsB key={"bcs"} chain={chain} />
      <MemoizedCa1B key={"ca1"} chain={chain} />
      <MemoizedCa2B key={"ca2"} chain={chain} />
      <MemoizedExcB key={"exc"} chain={chain} />
    </section>
  )
}

export default Binaries