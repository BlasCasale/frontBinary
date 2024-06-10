import { useState, useEffect } from "react";

export const useGetCa2B = (chain) => {
  const [binary, setBinary] = useState("");
  const [max, setMax] = useState({});

  useEffect(() => {
    if (chain.length >= 2) {
      let result = 0;
      const exponent = chain.length - 1;
      const maxNumber = Math.pow(2, exponent) - 1;
      const negative = (maxNumber + 1) * (-1);
      const maxNumbers = {
        positive: maxNumber,
        negative: negative
      };
      setMax(maxNumbers);

      const lastBit = chain[0];

      let boolean = false;
      for (let i = exponent; i >= 0; i--) {
        if (lastBit == '1') {
          if (i >= 0) {
            if ((boolean) && (chain[i] == '0')) result = result + Math.pow(2, exponent - i);
            else if ((!boolean) && (chain[i] == '1')) {
              boolean = !boolean;
              result = result + Math.pow(2, exponent - i);
            }
          } else if (i == 0) result = result * (-1);
        } else {
          if ((chain[i] == '1') && (i > 0)) {
            result = result + (Math.pow(2, exponent - i))
          }
        }
      }
      if (lastBit == '1') result = result * (-1);
      result = result.toString();
      setBinary(result);
    }

    return () => {
      setBinary("");
      setMax({});
    }
  }, [chain]);

  const info = {
    binary,
    max,
  };

  return info;
}