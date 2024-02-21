import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <Link to='/login'>Login</Link>
      <Link to='/NotFound'>NotFound</Link>
      <Link to='/'>Home</Link>
      <Link to='/admin'>Admin</Link>
    </>
  )
}