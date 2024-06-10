import { useGetExcB } from "../../hooks/useGetExcB"

const ExcB = ({ chain }) => {

  const info = useGetExcB(chain);

  return (
    <article>
      <h4>Exc</h4>
      <p>El número interpretado en Exc es: {info.binary}</p>
      <p>El máximo numero positivo representable es: {info.max.positive}</p>
      <p>El máximo numero negativo representable es: {info.max.negative}</p>
    </article>
  )
}

export default ExcB