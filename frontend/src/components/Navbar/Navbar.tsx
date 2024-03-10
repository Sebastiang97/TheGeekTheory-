import { Link } from "react-router-dom"


export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="https://images7.alphacoders.com/130/1305464.jpg" alt="" />
      </div>
      <div className="links">
        <Link to='/login'>Login</Link>
        <Link to='/NotFound'>NotFound</Link>
        <Link to='/'>Home</Link>
        <Link to='/admin/products/'>productos</Link>
      </div>
    </nav>
  )
}

