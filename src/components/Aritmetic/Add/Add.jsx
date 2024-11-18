import React from 'react'
import { useState, useCallback } from 'react'
import InputGates from '../../InputGates/InputGates'
import Outputadd from './Outputadd'

const Add = () => {
  const [input, setInput] = useState({ addOne: "", addTwo: "" })

  const handleInput = useCallback((e) => {
    const { name, value } = e.target
    const newChain = value.replace(/[^01]/g, "")
    setInput(prev => ({
      ...prev,
      [name]: newChain
    }))
  }, [])

  const cleanInput = useCallback((field) => {
    setInput(prev => ({
      ...prev, [field]: ""
    }))
  }, [])

  return (
    <article>
      <h4>Suma binaria</h4>
      <InputGates handleInput={handleInput} n="1" name="addOne" value={input.addOne} key="addOne" cleanInput={() => cleanInput("addOne")} />
      <InputGates handleInput={handleInput} n="2" name="addTwo" value={input.addTwo} key="addTwo" cleanInput={() => cleanInput("addTwo")} />
      <Outputadd one={input.addOne} two={input.addTwo} key="outputAdd" />
    </article>
  )
}

export default Add