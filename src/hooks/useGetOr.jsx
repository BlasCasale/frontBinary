import { useState, useEffect } from "react"

export const useGetOr = (one, two) => {
  const [value, setValue] = useState("")

  useEffect(() => {
    if (one && two && one.length === two.length) {
      let newValue = ""
      for (let i = 0; i < one.length; i++) {
        if (one[i] === "1" || two[i] === "1") newValue += "1"
        else newValue += "0"
      }
      setValue(newValue)
    } else {
      setValue("")
    }
  }, [one, two])

  return value
}