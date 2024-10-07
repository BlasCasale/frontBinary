import { useState } from "react";
import BssD from "../BssD/BssD";
import BcsD from "./BcsD/BcsD";
import Ca1D from "../Ca1D/Ca1D";
import Ca2D from "../Ca2D/Ca2D";
import ExcD from "../ExcD/ExcD";

const Decimals = () => {
  const [chain, setChain] = useState("");
  const [inputR, setInputR] = useState("");

  const boolean = inputR[0] === "-" ? false : true;

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const handleInput = (e) => {
    let input = e.target.value;
    let newChain = "";

    for (let i = 0; i < input.length; i++) {
      if (input[0] === "-") {
        if (i !== 0 && numbers.includes(input[i])) {
          newChain += input[i];
        } else if (i !== 0) {
          input[i] = "";
        }
      } else {
        if (numbers.includes(input[i])) {
          newChain += input[i];
        } else {
          input[i] = "";
        }
      }
    }

    setInputR(input);
    setChain(newChain);
  };

  return (
    <section>
      <h2>Decimales</h2>
      <input type="text" value={inputR} onChange={handleInput} />
      <BssD key={"bss"} chain={chain} boolean={boolean} />
      <BcsD key={"bcs"} chain={chain} boolean={boolean} />
      <Ca1D key={"ca1"} chain={chain} boolean={boolean} />
      <Ca2D key={"ca2"} chain={chain} boolean={boolean} />
      <ExcD key={"exc"} chain={chain} boolean={boolean} />
    </section>
  );
};

export default Decimals;
