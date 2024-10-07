import { useGetBcsD } from "../../../hooks/useGetBcsD"


const BcsD = ({ chain, boolean }) => {

  const binarie = useGetBcsD(chain, boolean);

  return (
    <article>
      <p>En BCS: {!chain ? "" : binarie}</p>
    </article>
  )
}

export default BcsD