import { useGetBssD } from "../../hooks/useGetBssD"

const BssD = ({ chain, boolean }) => {

  const wrongResponse = "No se puede representar N° negativos en BSS";

  const binarie = useGetBssD(chain);
  return (
    <article>
      <p>En BSS: {!boolean ? wrongResponse : binarie}</p>
    </article>
  )
}

export default BssD