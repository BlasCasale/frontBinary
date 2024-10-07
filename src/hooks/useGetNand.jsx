import { useState, useEffect } from "react"

export const useGetNand = (one, two) => {
  const [value, setValue] = useState("")

  useEffect(() => {
    if (one && two && (one.length === two.length)) {
      let newChain = ""

      for (let i = 0; i < one.length; i++) {
        if (one[i] === "0" && two[i] === "0") newChain += "1"
        else newChain += "0"
      }

      setValue(newChain)
    } else {
      setValue("")
    }
  }, [one, two])

  return value
}
