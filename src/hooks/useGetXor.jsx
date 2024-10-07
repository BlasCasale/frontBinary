import { useState, useEffect } from "react"

export const useGetXor = (one, two) => {

  const [value, setValue] = useState("")

  useEffect(() => {
    if (one && two && (one.length === two.length)) {
      let newChain = ""

      for (let i = 0; i < one.length; i++) {
        if (one[i] === two[i]) newChain += "0"
        else newChain += "1"
      }

      setValue(newChain)
    } else {
      setValue("")
    }
  }, [one, two])

  return value
}