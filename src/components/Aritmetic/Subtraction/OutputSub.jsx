import React from 'react'
import { useGetSub } from "../../../hooks/useGetSub"
import { badResponse, sameLength } from "../../../utils/data"
import { memo } from 'react'
import './OutputSub.css'

const OutputSub = ({ one, two }) => {
  const sub = useGetSub(one, two)

  return (
    <article className='output'>
      <div>
        <p>{one}</p>
        <p>{two}</p>
        {one && two && sub.result && <hr />}
        <p>{!one && !two ? sameLength : sub.result ? sub.result : badResponse}</p>
      </div>
      <h5>Flags</h5>
      <div className='flags'>
        <p>C={sub.carry}</p>
        <p>N={sub.n}</p>
        <p>O={sub.overflow}</p>
        <p>Z={sub.z}</p>
      </div>
    </article>
  )
}

const OutputSubMemo = memo(OutputSub, (prev, next) => prev.one === next.one && prev.two === next.two)

export default OutputSubMemo
