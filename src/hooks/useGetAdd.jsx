import { useState, useEffect } from "react"

export const useGetAdd = (one, two) => {
  const [add, setAdd] = useState({ result: "", carry: "0", n: "0", overflow: "0", z: "0" })

  useEffect(() => {
    if (one && one.length === two.length) {
      let result = ""
      let carry = 0
      let i = one.length - 1
      let j = two.length - 1

      while (i >= 0 || j >= 0 || carry) {
        const sum = carry + (i >= 0 ? parseInt(one[i--], 10) : 0) + (j >= 0 ? parseInt(two[j--], 10) : 0)
        carry = sum > 1 ? 1 : 0
        result = (sum % 2) + result
      }

      if (one.length != result.length) {
        setAdd(prev => ({
          ...prev,
          carry: "1"
        }))
        result = result.slice(1)
      }

      if (one[0] === two[0] && one[0] !== result[0]) {
        setAdd(prev => ({
          ...prev,
          overflow: "1"
        }))
      }

      const zero = /^0*$/.test(result)

      setAdd(prev => ({
        ...prev,
        result,
        n: result[0],
        z: zero ? "1" : "0"
      }))
    } else {
      setAdd({ result: "", carry: "0", n: "0", overflow: "0", z: "0" })
    }
  }, [one, two])

  return add
}
