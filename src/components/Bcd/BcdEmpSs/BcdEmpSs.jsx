import { useState } from "react";
import { numbers } from "../../../utils/data";
import { useGetBcdEmpSs } from "../../../hooks/useGetBcdEmpSs";

const BcdEmpSs = () => {
  const [number, setNumber] = useState("");
  const [chain, setChain] = useState("");

  const handleInput = (e) => {
    let input = e.target.value;
    let newChain = "";

    for (let i = 0; i < input.length; i++) {
      if (numbers[input[i]]) newChain += input[i];
      else input[i] = "";
    }

    setChain(newChain);
    setNumber(input);
  };

  const binarie = useGetBcdEmpSs(chain);

  return (
    <article>
      <h4>BCD empaquetado sin signo</h4>
      <input type="text" value={number} onChange={handleInput} />
      <p>Binario: {binarie}</p>
    </article>
  )
}

export default BcdEmpSs;