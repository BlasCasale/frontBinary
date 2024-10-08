import { useState, useEffect } from "react"

export const useGetSub = (one, two) => {

  const [sub, setSub] = useState({ result: "", carry: "0", overflow: "0", n: "0", z: "0" })

  useEffect(() => {
    if (one && one.length === two.length) {
      let result = ''
      let borrow = 0

      // Empieza desde el final de ambas cadenas
      let i = one.length - 1
      let j = two.length - 1

      while (i >= 0 || j >= 0) {
        let bitA = i >= 0 ? parseInt(one[i--], 2) : 0
        let bitB = j >= 0 ? parseInt(two[j--], 2) : 0

        bitB += borrow

        if (bitA < bitB) {
          bitA += 2
          borrow = 1
        } else {
          borrow = 0
        }

        result = (bitA - bitB) + result
      }

      // Verificar overflow en binarios signados:
      const msbA = parseInt(one[0], 2)
      const msbB = parseInt(two[0], 2)
      const msbResult = parseInt(result[0], 2)

      const overflow = ((msbA !== msbB) && (msbA !== msbResult))

      const zero = /^0*$/.test(result)

      setSub({
        result: result,
        carry: borrow,
        n: result[0],
        overflow: overflow ? "1" : "0",
        z: zero ? "1" : "0"
      })
    } else {
      setSub({ result: "", carry: "0", overflow: "0", n: "0", z: "0" })
    }
  }, [one, two])

  return sub
}