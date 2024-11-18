import React from "react"
import Add from "./Add/Add"
import Subtraction from "./Subtraction/Subtraction"
import './Aritmetic.css'

const Aritmetic = () => {
  return (
    <section className="aritmeticSection">
      <Add />
      <Subtraction />
    </section>
  )
}

export default Aritmetic