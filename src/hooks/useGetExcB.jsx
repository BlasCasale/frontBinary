import { useState, useEffect } from "react";

export const useGetExcB = (chain) => {
  const [binary, setBinary] = useState("");
  const [max, setMax] = useState({ positive: "", negative: "" });

  useEffect(() => {
    let result = 0;
    if (chain.length > 1) {
      const exponent = chain.length - 1;
      const maxNumber = Math.pow(2, chain.length - 1);
      const maxNumbers = {
        positive: maxNumber - 1,
        negative: (maxNumber + (maxNumber - 1)) * -1
      };
      setMax(maxNumbers);

      const excToSub = Math.pow(2, exponent);

      for (let i = exponent; i >= 0; i--) {

        if (chain[i] == '1') {
          result = result + (Math.pow(2, exponent - i));
        }
      }

      result = result - excToSub;
      result = result.toString();
      setBinary(result);
    } else {
      setBinary("")
      setMax({ positive: "", negative: "" })
    }

    return () => {
      setBinary("");
      setMax({ positive: "", negative: "" });
    }
  }, [chain]);

  const info = {
    binary,
    max
  };

  return info;
}