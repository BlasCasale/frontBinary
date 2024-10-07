import { useGetCa2D } from "../../hooks/useGetCa2D"


const Ca2D = ({ chain, boolean }) => {

  const binarie = useGetCa2D(chain, boolean);

  return (
    <article>
      <p>En Ca2: {!chain ? "" : binarie}</p>
    </article>
  )
}

export default Ca2D