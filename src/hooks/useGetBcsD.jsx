import { useState, useEffect } from "react";
import { getBss } from "../utils/getBss";

export const useGetBcsD = (num, boolean) => {
  const [binarie, setBinarie] = useState("");

  useEffect(() => {
    if (num.length) {
      let string = getBss(num);
      const lengthOfString = string.length + 1;

      if (!boolean) string = string.padStart(lengthOfString, '1');
      else string = string.padStart(lengthOfString, '0');

      setBinarie(string);
    }

    return () => setBinarie("");
  }, [num]);

  return binarie;
}