import React from 'react'
import { useGetSub } from "../../../hooks/useGetSub"
import { badResponse, sameLength } from "../../../utils/data"

const OutputSub = ({ one, two }) => {
  const sub = useGetSub(one, two)

  return (
    <article>
      <p>{one}</p>
      <p>{two}</p>
      <p>{!one && !two ? sameLength : sub.result ? sub.result : badResponse}</p>
      <div>
        <h5>Flags</h5>
        <p>C={sub.carry}</p>
        <p>N={sub.n}</p>
        <p>O={sub.overflow}</p>
        <p>Z={sub.z}</p>
      </div>
    </article>
  )
}

export default OutputSub
