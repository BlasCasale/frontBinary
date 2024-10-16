import Aritmetic from "../Aritmetic/Aritmetic"
import Bcd from "../Bcd/Bcd"
import Binaries from "../Binaries/Binaries"
import Decimals from "../Decimals/Decimals"
import Hexadecimals from "../Hexadecimals/Hexadecimals"
import LogicalGates from "../LogicalGates/LogicalGates"
import './Body.css'

const Body = () => {
  return (
    <main>
      <Binaries />
      <Decimals />
      <Hexadecimals />
      <Bcd />
      <LogicalGates />
      <Aritmetic />
    </main>
  )
}

export default Body