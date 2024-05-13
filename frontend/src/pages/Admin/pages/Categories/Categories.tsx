import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"
import { List } from "@@/List/List"

export const Categories = () => {
  const { t } = useTranslation(["translation"])
  const categories  = useCategoryStore(state=> state.categories)
  const listProductsCategory  = useCategoryStore(state=> state.listProductsCategory)
  
  const list  = useCategoryStore(state=> state.list)
  const navigate = useNavigate()


  useEffect(()=>{
    list()
    console.log({categories}) 
  },[])
  
  return (
    <div className="container">
      <div className="adminTitle">
        <h2>{t("Categorias")}</h2>
        <div className="actions end">
          <button
            onClick={() => navigate("/admin/categories/actions/create")}>
            {t("components.admin.actions.new")}
          </button>
          <button
            onClick={() => listProductsCategory("03991c08-547a-4fb0-b7dc-4bf2b74755f3")}>
            {t("ejemplo")}
          </button>
        </div>
      </div>
      <List elements={categories} typeCard="category" className="list" />
    </div>
  )
}

