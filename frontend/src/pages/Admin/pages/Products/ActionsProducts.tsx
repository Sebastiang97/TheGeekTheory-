import { FormDinamic } from "@@/forms/FormDinamic"
import { inputAdminFields } from "./actions.constant"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { ACTIONS } from "@/constants/service.constant"

export const ActionsProducts = () => {
  const params = useParams()
  console.log({params})

  useEffect(() => {
    if(params.id !== ACTIONS.CREATE){
    }
    
  }, [])
  
  return (
    <FormDinamic inputFields={inputAdminFields}/>
  )
}
