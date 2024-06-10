import { useState, useEffect } from "react";
import { getBss } from "../utils/getBss";

export const useGetCa2D = (chain, sign) => {
  const [binarie, setBinarie] = useState("");

  useEffect(() => {
    let string = getBss(chain);

    if (!sign) {
      let j = 1;
      string = string.padStart(string.length + 1, '0');
      let copy = '';
      let boolean = false;
      for (let i = string.length - 1; i >= 0; i--) {
        if ((!boolean) && (string[i] == '0')) {
          copy = copy.padStart(j, '0');
        } else if ((!boolean) && (string[i] == '1')) {
          copy = copy.padStart(j, '1');
          boolean = !boolean;
        } else if (boolean) {
          if (string[i] == '1') copy = copy.padStart(j, '0');
          else copy = copy.padStart(j, '1');
        }
        j++;
      }
      let number = Number(chain) * (-1);
      if (number == Math.pow(2, string.length - 2)) copy = copy.slice(1, copy.length);
      setBinarie(copy);
    } else {
      string = string.padStart(string.length + 1, '0');
      setBinarie(string);
    }

    return () => setBinarie("");
  }, [chain]);

  return binarie;
}
