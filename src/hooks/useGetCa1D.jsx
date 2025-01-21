import { useState, useEffect } from "react";
import { getBss } from "../utils/getBss";

export const useGetCa1D = (chain, boolean) => {
  const [binarie, setBinarie] = useState("");

  useEffect(() => {
    if (chain.length > 0) {
      let string = getBss(chain);
      string = string.padStart(string.length + 1, '0');

      if (!boolean) {
        let copy = '';
        for (let i = 0; i < string.length; i++) {
          if (string[i] == '1') copy += '0';
          else copy += '1';
        }
        setBinarie(copy)
      } else {
        setBinarie(string);
      }
    }

    return () => setBinarie("");
  }, [chain]);

  return binarie;
};