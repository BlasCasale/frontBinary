import { useState, useEffect } from "react"

export const useGetNot = (chain) => {
  const [value, setValue] = useState("")

  useEffect(() => {
    if (chain) {
      const newChain = chain.replace(/./g, (char) => char === "1" ? "0" : "1")
      setValue(newChain)
    } else {
      setValue("")
    }
  }, [chain])

  return value
}