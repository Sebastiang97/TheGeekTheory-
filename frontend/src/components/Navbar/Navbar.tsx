import { LANGUAGES } from "@/constants/Language"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"


export const Navbar = () => {
  const { t,i18n } = useTranslation(["translation"])

  const changeLanguage = ():void =>{
    console.log(i18n.language);

    (i18n.language === LANGUAGES.ENGLISH.code) 
    ? i18n.changeLanguage(LANGUAGES.SPANISH.code)
    : i18n.changeLanguage(LANGUAGES.ENGLISH.code)
  }

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
      <button onClick={changeLanguage}>
        {
          (i18n.language === LANGUAGES.ENGLISH.code) 
          ? t(LANGUAGES.ENGLISH.name)
          : t(LANGUAGES.SPANISH.name)
        }
      </button>
    </nav>
  )
}

