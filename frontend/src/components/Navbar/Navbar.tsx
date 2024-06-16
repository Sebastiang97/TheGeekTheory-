import { NAV_LIST } from "@/constants/Nav.constants"
import { useAuthenticateStore } from "@/libs/store/zustand/useAuthenticateStore"
import { Hamburger } from "@@/icons/Hamburger"
import { Language } from "@@/icons/Language/Language"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export const Navbar = () => {
  const user = useAuthenticateStore(state => state.user)
  const getUser = useAuthenticateStore(state => state.getUser)

  useEffect(()=>{
    getUser()
  },[])

  return (
    <nav>
      <Hamburger />
      <section className="links">
        {
          NAV_LIST.map((nav, i) => (
            <Link key={i} to={nav.to}>
              {nav.text}
            </Link>
          ))
        }
      </section>
      <Language />
      {/* <div className="logo">
        <img src="https://images7.alphacoders.com/130/1305464.jpg" alt="" />
      </div>
      <div className="links">
        <Link to='/login'>Login</Link>
        <Link to='/NotFound'>NotFound</Link>
        <Link to='/'>Home</Link>
        <Link to='/admin/products/'>admin</Link>
      </div>
      <button onClick={changeLanguage}>
        {
          (i18n.language === LANGUAGES.ENGLISH.code) 
          ? t(LANGUAGES.ENGLISH.name)
          : t(LANGUAGES.SPANISH.name)
        }
      </button>
      {
        user.picture 
        ? (
          <div className="profile">
            <img src={user.picture} alt="" />
          </div>
        ) 
        : (
          <button >
            Sign In
          </button>
        ) 
      } */}
      
    </nav>
  )
}

