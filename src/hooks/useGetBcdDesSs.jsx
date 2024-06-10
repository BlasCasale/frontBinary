import { useState, useEffect } from "react";
import { numbers } from "../utils/data";

export const useGetBcdDesSs = (chain) => {
  const [binarie, setBinarie] = useState("");

  useEffect(() => {
    let result = '';

    if (chain.length > 0) {
      for (let i = 0; i < chain.length; i++) {
        result += `1111${numbers[chain[i]]}`;
      }
    }

    setBinarie(result);

    return () => setBinarie("");
  }, [chain]);
  
  return binarie;
};