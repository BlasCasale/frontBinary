import { useState, useEffect } from "react"

export const useGetCompleteBinary = (chain) => {

  const [binary, setBinary] = useState([])

  useEffect(() => {
    if (chain.length > 0) {
      const rest = chain.length % 4

      let finalLength
      if (rest !== 0) {
        finalLength = chain.length + (4 - rest)
        chain = chain.padStart(finalLength, '0')
      }
      const segments = [];
      for (let i = 0; i < chain.length; i += 4) {
        segments.push(chain.slice(i, i + 4));
      }
      setBinary(segments)
    }

    return () => setBinary([])
  }, [chain])

  return binary
}