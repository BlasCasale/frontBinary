import { useState, useEffect } from "react";
import { numbers } from "../utils/data";

export const useGetBcdEmpSs = (chain) => {
  const [binarie, setBinarie] = useState("");

  useEffect(() => {
    let result = '';

    for (let i = 0; i < chain.length; i++) {
      result += numbers[chain[i]];
    }

    setBinarie(result);

    return () => setBinarie("");
  }, [chain]);

  return binarie;
};