import { FormDinamic } from "@@/forms/FormDinamic"
import { actions, inputAdminFields } from "./actions.constant"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ACTIONS } from "@/constants/service.constant"
import { useTranslation } from "react-i18next"
import { PreviewImages } from "@@/PreviewImages/PreviewImages"
import { useCategoryStore } from "@/libs/store/zustand/useCategoryStore"

export const ActionsCategories = () => {
  const { t } = useTranslation(["translation"])
  const navigate = useNavigate()
  const createCategory = useCategoryStore(state => state.createCategory)
  const params = useParams()
  const [images, setImages ]= useState<string[]>([])
  const [currentImage, setCurrentImage ]= useState<string>("")

  const getImgs = (values:any)=>{
    if(values.files?.length){
      let img: string[] = []
      values.files.map((file:any)=>{
        img.push(URL.createObjectURL(file))
      })
      setCurrentImage(img[0])
      setImages(img)
    }
  }

  const getValues = (values:any)=>{
    const formData: FormData = new FormData();

    Object.keys(values).map((key)=>{
      if(key === "files"){
        values[key].map((value: any)=>{
          formData.append("file", value);  
        })
      }else{
        formData.append(key, values[key]);
      }
      
    })

    createCategory(formData)
      .then(_=>{
        navigate("/admin/categories")
      }).catch(error=>{
        console.log(error)
      })
    
  }

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
        {
          images.length
          ? <PreviewImages images={images} currentImage={currentImage}/>
          : <div>Sin fotos subidas</div>
        }
        <FormDinamic
          inputFields={inputAdminFields}
          actions={actions}
          getImgs={getImgs}
          getValues={getValues}
          />
      </div>
    </>
  )
}