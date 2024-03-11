import { FormDinamic } from "@@/forms/FormDinamic"
import { actions, inputAdminFields } from "./actions.constant"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { ACTIONS } from "@/constants/service.constant"
import { useTranslation } from "react-i18next"

export const ActionsProducts = () => {
  const { t } = useTranslation(["translation"])

  const navigate = useNavigate()
  const params = useParams()
  console.log({ params })

  useEffect(() => {
    if (params.id !== ACTIONS.CREATE) {
    }

  }, [])

  return (
    <>
      <div className="container">
        <div className="actions">
          <button 
            onClick={() => navigate("/admin/products/")}>
            {t("components.admin.actions.back")}
          </button>
        </div>
        <FormDinamic inputFields={inputAdminFields} actions={actions} />
      </div>
    </>
  )
}
