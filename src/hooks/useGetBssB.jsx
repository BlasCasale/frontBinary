import { useState, useEffect } from "react"

export const useGetBssB = (chain) => {
  const [binary, setBinary] = useState("")
  const [max, setMax] = useState("")

  useEffect(() => {
    let result = 0

    if (chain.length > 0) {
      const exponent = chain.length - 1
      const maxNumber = Math.pow(2, chain.length) - 1
      setMax(maxNumber)
      for (let i = exponent; i >= 0; i--) {
        if (chain[i] === '1') {
          result = result + (Math.pow(2, exponent - i))
        }
      }
      setBinary(result)
    } else {
      setBinary("")
      setMax("")
    }

    return () => {
      setBinary("")
      setMax("")
    }
  }, [chain])

  const info = {
    num: binary,
    max: max
  }

  return info
}