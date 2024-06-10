import Bcd from "../Bcd/Bcd"
import Binaries from "../Binaries/Binaries"
import Decimals from "../Decimals/Decimals"
import Hexadecimals from "../Hexadecimals/Hexadecimals"

const Body = () => {
  return (
    <main>
      <Binaries />
      <Decimals />
      <Hexadecimals />
      <Bcd />
    </main>
  )
}

export default Body