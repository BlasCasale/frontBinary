import { useState } from "react";
import { hexas } from "../../../utils/data";
import { useGetBinarie } from "../../../hooks/useGetBinarie";

const GetBinarie = () => {
  const [inputR, setInputR] = useState("");
  const [chain, setChain] = useState("");

  const handleInput = (e) => {
    let input = e.target.value;
    let newChain = "";

    input = input.toUpperCase();

    for (let i = 0; i < input.length; i++) {
      if (hexas.includes(input[i])) {
        newChain += input[i];
      } else {
        input[i] = "";
      }
    }

    setInputR(input);
    setChain(newChain);
  };

  const binarie = useGetBinarie(chain);

  return (
    <div>
      <h4>De hexacimal a binario</h4>
      <input type="text" value={inputR} onChange={handleInput} />
      <p>Cadena en binario: {binarie}</p>
    </div>
  )
}

export default GetBinarie