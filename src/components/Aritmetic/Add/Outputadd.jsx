import React from "react"
import { useGetAdd } from "../../../hooks/useGetAdd"
import { badResponse, sameLength } from "../../../utils/data"
import { memo } from "react"

const Outputadd = ({ one, two }) => {
  const add = useGetAdd(one, two)

  return (
    <article className="output">
      <div>
        <p>{one}</p>
        <p>{two}</p>
        {one && two && add.result && <hr />}
        <p>{!one && !two ? sameLength : add.result ? add.result : badResponse}</p>
      </div>
      <h5>Flags</h5>
      <div className="flags">
        <p>C={add.carry}</p>
        <p>N={add.n}</p>
        <p>O={add.overflow}</p>
        <p>Z={add.z}</p>
      </div>
    </article>
  )
}

const OutputaddMemoized = memo(Outputadd, (prev, next) => prev.one === next.one && prev.two === next.two)

export default OutputaddMemoized
