import { useState, useEffect } from "react";

export const useGetBcsB = (chain) => {
  const [binary, setBinary] = useState("");
  const [max, setMax] = useState("")

  useEffect(() => {
    let result = 0;

    if (chain.length >= 2) {
      const exponent = chain.length - 1;
      const maxNumber = Math.pow(2, exponent) - 1;
      const maxNumbers = {
        positive: maxNumber,
        negative: maxNumber * (-1)
      };
      setMax(maxNumbers);
      const lastBit = chain[0];

      for (let i = exponent; i >= 1; i--) {
        if (chain[i] == '1') {
          result = result + (Math.pow(2, exponent - i));
        }
      }

      if (lastBit == '1') result = result * (-1);

      if ((result == 0) && (lastBit == '1')) {
        result = result.toString();
        result = result.padStart(result.length + 1, '-');
        setBinary(result);
      } else {
        setBinary(result);
      }
    }

    return () => setBinary("");
  }, [chain]);

  const info = {
    binary,
    max
  }

  return info;
}