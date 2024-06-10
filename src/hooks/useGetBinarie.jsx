import { useState, useEffect } from "react";
import { binary } from "../utils/data";

export const useGetBinarie = (chain) => {
  const [binarie, setBinarie] = useState("");

  useEffect(() => {
    let result = '';

    for (let i = 0; i < chain.length; i++) {
      result += binary[chain[i]];
    }

    setBinarie(result);

    return () => setBinarie("");
  }, [chain]);

  return binarie;
}