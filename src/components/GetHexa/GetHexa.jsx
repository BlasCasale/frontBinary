import { useState } from "react"
import { useGetHexadecimal } from "../../hooks/useGetHexadecimal";

const GetHexa = () => {
  
  const [inputR, setInputR] = useState("");
  const [chain, setChain] = useState("");

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

  const hexa = useGetHexadecimal(chain);

  return (
    <article>
      <h4>De binario a hexadecimal</h4>
      <input type="text" onChange={handleInput} value={inputR} />
      <p>Cadena en hexadecimal: {hexa}</p>
    </article>
  )
}

export default GetHexa