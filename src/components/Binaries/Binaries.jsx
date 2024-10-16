import { useState } from "react"
import BssB from "./BssB/BssB";
import BcsB from "./BcsB/BcsB";
import Ca1B from "./Ca1B/Ca1B";
import Ca2B from "./Ca2B/Ca2B";
import ExcB from "./ExcB/ExcB";
import './Binaries.css'

const Binaries = () => {
  const [chain, setChain] = useState("");
  const [inputR, setInputR] = useState("");

  const handleInput = (e) => {
    let input = e.target.value;
    let newChain = "";

    for (let i = 0; i < input.length; i++) {
      if (input[i] === "0" || input[i] === "1") {
        newChain += input[i];
      } else {
        input[i] = "";
      }
    }
    setInputR(input);
    setChain(newChain);
  };

  return (
    <section className="sectionBinaries">
      <h2>Sistemas binarios</h2>
      <input type="text" onChange={handleInput} value={inputR} />
      <BssB key={"bss"} chain={chain} />
      <BcsB key={"bcs"} chain={chain} />
      <Ca1B key={"ca1"} chain={chain} />
      <Ca2B key={"ca2"} chain={chain} />
      <ExcB key={"exc"} chain={chain} />
    </section>
  )
}

export default Binaries