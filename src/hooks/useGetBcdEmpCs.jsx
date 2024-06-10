import { useState, useEffect } from "react";
import { numbers } from "../utils/data";

export const useGetBcdEmpCs = (chain, boolean) => {
  const [binarie, setBinarie] = useState("");

  useEffect(() => {
    let result = '';

    if (chain.length !== 0) {
      for (let i = 0; i < chain.length; i++) {
        result += numbers[chain[i]];
      }
      if (!boolean) result += '1101';
      else result += '1100';
    }

    setBinarie(result);

    return () => setBinarie("");
  }, [chain]);

  return binarie;
}