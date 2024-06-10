import { useState, useEffect } from "react";
import { getBss } from "../utils/getBss";

export const useGetBssD = (num) => {
  const [binarie, setBinarie] = useState("");

  useEffect(() => {
    const response = getBss(num);

    setBinarie(response);

    return () => setBinarie("");
  }, [num]);

  return binarie;
}