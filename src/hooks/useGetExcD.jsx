import { useEffect, useState } from "react";
import { getBss } from "../utils/getBss";

export const useGetExcD = (chain, boolean) => {
  const [binarie, setBinarie] = useState("");

  useEffect(() => {
    let param = 0;
    let i = 0;
    let partial = 0;
    
    if (!boolean) {
      /*
        chain = -12
        partial 1
        partial 2
        partial 4
        partial 8
        partial 16
      */
      while (partial < chain) {
        partial = Math.pow(2, i);
        i++;
      }
      param = partial - chain;
    } else {
      while (partial <= chain) {
        partial = Math.pow(2, i);
        i++;
      }
      param = partial + chain;
    }
    let string = getBss(param);

    setBinarie(string);

    return () => setBinarie("");
}, [chain]);

return binarie
}