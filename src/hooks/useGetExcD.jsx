import { useEffect, useState } from "react";
import { getBss } from "../utils/getBss";

export const useGetExcD = (chain, boolean) => {
  const [binarie, setBinarie] = useState("");

  useEffect(() => {
    if (chain.length > 0) {
      let param = 0;
      let i = 0;
      let partial = 0;

      chain = Number(chain);
      if (!boolean) {
        chain = chain * (-1)
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
      param = param.toString();
      let string = getBss(param);

      // si es negativo lo que hago es agregarle 0 a lo que me retorne la funcion para lograr expresar bien el exceso
      if (!boolean) string = string.padStart(i, '0');

      setBinarie(string);
    }

    return () => setBinarie("");
  }, [chain]);

  return binarie
}