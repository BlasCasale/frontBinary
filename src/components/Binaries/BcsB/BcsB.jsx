import { useGetBcsB } from "../../../hooks/useGetBcsB"

const BcsB = ({ chain }) => {

  const info = useGetBcsB(chain);
  
  return (
    <article>
      <h4>BCS</h4>
      <p>El numero interpretado en BCS es: {info.binary}</p>
      <p>El máximo N° positivo representable es: {info.max.positive}</p>
      <p>El máximo N° negativo representable es: {info.max.negative}</p>
    </article>
  )
}

export default BcsB