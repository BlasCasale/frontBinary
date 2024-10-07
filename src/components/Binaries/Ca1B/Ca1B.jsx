import { useGetCa1B } from "../../../hooks/useGetCa1B"

const Ca1B = ({ chain }) => {

  const info = useGetCa1B(chain);

  return (
    <article>
      <h4>Ca1</h4>
      <p>El número interpretado en Ca1 es: {info.binary}</p>
      <p>El máximo número positivo representable es: {info.max.positive}</p>
      <p>El máximo número negativo representable es: {info.max.negative}</p>
    </article>
  )
}

export default Ca1B