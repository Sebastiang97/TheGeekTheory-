import { useNavigate } from "react-router-dom"
import { useProducts } from "@/hooks/useProducts"
import { List } from "@@/List/List"
import "@/pages/Admin/styles.css"

export const Admin = () => {
  const [products] = useProducts()
  const navigate = useNavigate()


  return (
    <div className="container">
      <div className="">
        <h2>Products</h2>
        <button onClick={() => navigate("/admin/products/actions/create")}>crear</button>
      </div>
      <List products={products} className="list" />
    </div>
  )
}
