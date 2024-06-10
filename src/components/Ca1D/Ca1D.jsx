import { useGetCa1D } from "../../hooks/useGetCa1D"

const Ca1D = ({ chain, boolean }) => {

  const binarie = useGetCa1D(chain, boolean);

  return (
    <article>
      <p>En Ca1: {!chain ? "" : binarie}</p>
    </article>
  )
}

export default Ca1D