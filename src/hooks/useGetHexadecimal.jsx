import { useState, useEffect } from "react";
import { hexa } from "../utils/data";

export const useGetHexadecimal = (chain) => {
  const [hexadecimal, setHexadecimal] = useState("");

  useEffect(() => {
    let result = '';

    const rest = chain.length % 4;

    if (rest == 0) {
      const roundsOfFor = chain.length / 4;

      for (let i = 1; i <= roundsOfFor; i++) {
        const cuttedChain = chain.slice(0, 4);
        result += hexa[cuttedChain];
        chain = chain.slice(4);
      }
    } else {
      const finalLength = chain.length + (4 - rest);

      chain = chain.padStart(finalLength, '0');

      const roundsOfFor = chain.length / 4;

      for (let i = 1; i <= roundsOfFor; i++) {
        const cuttedChain = chain.slice(0, 4);
        result += hexa[cuttedChain];
        chain = chain.slice(4);
      }
    }

    setHexadecimal(result);
    return () => setHexadecimal("");
  }, [chain]);

  return hexadecimal;
};