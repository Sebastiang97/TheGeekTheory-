import { useState } from "react"
import "./counter.css"
export const Counter = ({initialState}: {initialState:number} ) => {
    const [count, setCount] = useState(initialState || 0)
  return (
    <div className="counter">
        <button onClick={()=>{setCount((current:number)=> current - 1)}}>-</button>
        <div className="display">{count}</div>
        <button onClick={()=>{setCount((current:number)=> current + 1)}}>+</button>
    </div>
  )
}
