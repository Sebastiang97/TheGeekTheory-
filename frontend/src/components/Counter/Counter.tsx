import { useState } from "react"
import "./counter.css"
import { useCartStore } from "@/libs/store/zustand/useCartStore"
import { Product } from "@/Models/Product"

interface Props{ 
  initialState: number 
  product: Product
}
export const Counter = ({ initialState, product }: Props) => {
  const [count, setCount] = useState(initialState || 0)
  const addProduct  = useCartStore(state => state.addProduct)

  const addCart =()=>{
    addProduct(product, count)
    setCount(1) 
  }
  return (
    <>
      <div className="add">
        <button
          onClick={() => addCart()}>
          Agregar a tu carrito
        </button>
      </div>
      <div className="counter">
        <button onClick={() => { setCount((current: number) => current - 1) }}>-</button>
        <div className="display">{count}</div>
        <button onClick={() => { setCount((current: number) => current + 1) }}>+</button>
      </div>
    </>
  )
}
