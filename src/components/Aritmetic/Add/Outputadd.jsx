import { useGetAdd } from "../../../hooks/useGetAdd"
import { badResponse, sameLength } from "../../../utils/data"

const Outputadd = ({ one, two }) => {
  const add = useGetAdd(one, two)

  return (
    <article>
      <p>{one}</p>
      <p>{two}</p>
      <p>{!one && !two ? sameLength : add.result ? add.result : badResponse}</p>
      <div>
        <h5>Flags</h5>
        <p>C={add.carry}</p>
        <p>N={add.n}</p>
        <p>O={add.overflow}</p>
        <p>Z={add.z}</p>
      </div>
    </article>
  )
}

export default Outputadd
