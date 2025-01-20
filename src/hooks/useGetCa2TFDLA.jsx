import { useState, useEffect } from "react"
import { useGetNot } from "./useGetNot"

export const useGetCa2TFDLA = (chain) => {

  const [indexOfFirstOne, setIndexOfFirstOne] = useState(0)

  const [render, setRender] = useState('')

  useEffect(() => {
    let lastOne = 0
    for (let i = chain.length - 1; i > 0; i--) {
      if (chain[i] === '1') {
        lastOne = i
        break
      }
    }
    setIndexOfFirstOne(lastOne)
  }, [chain])

  useEffect(() => {
    let number = ''
    if (indexOfFirstOne !== 0 && chain[0] === '1') {
      number = chain.slice(0, indexOfFirstOne).replace(/./g, (char) => char === "1" ? "0" : "1")
      number = number + chain.slice(indexOfFirstOne)
    } else {
      number = chain
    }
    setRender(number)
  }, [indexOfFirstOne])

  return render
}
