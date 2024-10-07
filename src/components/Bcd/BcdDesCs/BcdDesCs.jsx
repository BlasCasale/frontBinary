import { useState } from "react"
import { numbers } from "../../utils/data";
import { useGetBcdDesCs } from "../../../hooks/useGetBcdDesCs";

const BcdDesCs = () => {
  const [inputR, setInputR] = useState("");
  const [chain, setChain] = useState("");

  const boolean = inputR[0] === "-" ? false : true;

  const handleInput = (e) => {
    let input = e.target.value;
    let newChain = "";

    for (let i = 0; i < input.length; i++) {
      if (input[0] === "-") {
        if (i !== 0 && numbers[input[i]]) newChain += input[i];
        else if (i !== 0) input[i] = ""
      } else {
        if (numbers[input[i]]) newChain += input[i];
        else input[i] = ""
      }
    }

    setChain(newChain);
    setInputR(input);
  };

  const binarie = useGetBcdDesCs(chain, boolean);

  return (
    <article>
      <h4>BCD desempaquetado con signo</h4>
      <input type="text" value={inputR} onChange={handleInput} />
      <p>Binario: {binarie}</p>
    </article>
  )
}

export default BcdDesCs