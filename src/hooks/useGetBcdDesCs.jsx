import { useState, useEffect } from "react";
import { numbers } from "../utils/data";

export const useGetBcdDesCs = (chain, boolean) => {
  const [binarie, setBinarie] = useState("");

  useEffect(() => {
    let result = '';

    for (let i = 0; i < chain.length; i++) {
      if (i < chain.length - 1) {
        result += `1111${numbers[chain[i]]}`;
      } else {
        if (!boolean) result += `1101${numbers[chain[i]]}`;
        else result += `1100${numbers[chain[i]]}`;
      }
    }

    setBinarie(result);

    return () => setBinarie("");
  }, [chain]);

  return binarie;
}