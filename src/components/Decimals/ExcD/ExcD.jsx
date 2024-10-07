import { useGetExcD } from "../../hooks/useGetExcD"


const ExcD = ({ chain, boolean }) => {

  const binarie = useGetExcD(chain, boolean);

  return (
    <article>
      <p>Exc: {!chain ? "" : binarie}</p>
    </article>
  )
}

export default ExcD