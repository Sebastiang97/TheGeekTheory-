import { FormDinamic } from "@@/forms/FormDinamic"
import { inputAdminFields } from "./actions.constant"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { ACTIONS } from "@/constants/service.constant"

export const ActionsProducts = () => {
  const navigate = useNavigate()
  const params = useParams()
  console.log({params})

  useEffect(() => {
    if(params.id !== ACTIONS.CREATE){
    }
    
  }, [])
  
  return (
    <>
      <button onClick={() => navigate("/admin/products/")}>atras</button>
      <FormDinamic inputFields={inputAdminFields}/>
    </>
  )
}
