import GetBinarie from "./GetBinarie/GetBinarie"
import GetHexa from "./GetHexa/GetHexa"
import './Hexadecimals.css'

const Hexadecimals = () => {

  return (
    <section className="sectionHexadecimals">
      <h2>BCH</h2>
      <GetHexa />
      <GetBinarie />
    </section>
  )
}

export default Hexadecimals