import { useGetBssB } from "../../../hooks/useGetBssB"

const BssB = ({ chain }) => {

  const info = useGetBssB(chain);

  return (
    <article>
      <h4>BSS</h4>
      <p>El número interpretado en BSS es: : {info.num}</p>
      <p>Máximo número representable en BSS: {info.max}</p>
    </article>
  )
}

export default BssB