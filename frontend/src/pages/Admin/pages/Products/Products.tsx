import { useProducts } from "@/hooks/useProducts"
import { List } from "@@/List/List"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

export const Products = () => {
  const { t } = useTranslation(["translation"])
  const [products] = useProducts()
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="adminTitle">
        <h2>{t("components.admin.products")}</h2>
        <div className="actions">
          <button
            onClick={() => navigate("/admin/products/actions/create")}>
            crear
          </button>
        </div>
      </div>
      <List products={products} className="list" />
    </div>
  )
}

