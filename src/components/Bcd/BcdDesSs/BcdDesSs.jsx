import { useState } from "react"
import { numbers } from "../../../utils/data";
import { useGetBcdDesSs } from "../../../hooks/useGetBcdDesSs";

const BcdDesSs = () => {
  const [inputR, setInputR] = useState("");
  const [chain, setChain] = useState("");

  const handleInput = (e) => {
    let input = e.target.value;
    let newChain = "";

    for (let i = 0; i < input.length; i++) {
      if (numbers[input[i]]) newChain += input[i];
      else input[i] = "";
    }

    setInputR(input);
    setChain(newChain);
  };

  const binarie = useGetBcdDesSs(chain);

  return (
    <artcile>
      <h4>BCD desempaquetado sin signo</h4>
      <input type="text" onChange={handleInput} value={inputR} />
      <p>Binario: {binarie}</p>
    </artcile>
  )
}

export default BcdDesSs