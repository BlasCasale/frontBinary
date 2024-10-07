import { useGetCa2B } from "../../../hooks/useGetCa2B";

const Ca2B = ({ chain }) => {

  const info = useGetCa2B(chain);

  return (
    <article>
      <h4>Ca2</h4>
      <p>El número interpretado en Ca2 es: {info.binary}</p>
      <p>El máximo número positivo representable es: {info.max.positive && info.max.positive}</p>
      <p>El máximo número negativo representable es: {info.max.negative && info.max.negative}</p>
    </article>
  )
}

export default Ca2B