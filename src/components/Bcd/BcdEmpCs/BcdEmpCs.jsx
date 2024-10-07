import { useState } from "react";
import { numbers } from "../../utils/data";
import { useGetBcdEmpCs } from "../../hooks/useGetBcdEmpCs";

const BcdEmpCs = () => {
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

  const binarie = useGetBcdEmpCs(chain, boolean);

  return (
    <section>
      <h4>BCD empaquetado con signo</h4>
      <input type="text" onChange={handleInput} value={inputR} />
      <p>Binario: {binarie}</p>
    </section>
  )
}

export default BcdEmpCs;