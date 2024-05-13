import { FormDinamic } from "@@/forms/FormDinamic"
import { actions, inputAdminFields } from "./actions.constant"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ACTIONS } from "@/constants/service.constant"
import { useTranslation } from "react-i18next"
import { PreviewImages } from "@@/PreviewImages/PreviewImages"
import { useCategories } from "@/hooks/useCategories"
import { useProductStore } from "@/libs/store/zustand/useProductStore"

export const ActionsProducts = () => {
  const { t } = useTranslation(["translation"])
  const navigate = useNavigate()
  const {category} = useCategories()
  // const {createProduct} = useProducts()
  const createProduct = useProductStore(state => state.createProduct)
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
    values.color = [
      {
        code: "uno",
        name: ""
      },
      {
        code: "dos",
        name: ""
      }
    ]

    values.size = [
      {
        code: "L",
        name: ""
      },
      {
        code: "M",
        name: ""
      }
    ]
    values.description = "descripcion"
    values.quantity = 12
    
    Object.keys(values).map((key)=>{
      if(key === "files"){
        values[key]?.map((value: any)=>{
          formData.append("file", value);  
        })
      }else if(key === "color" || key === "size"){
        formData.append(key,  JSON.stringify(values[key]));
      }else{
        formData.append(key, values[key]);
      }
    })

    
    createProduct(formData)
      .then(_=>{
        navigate("/admin/products")
      }).catch(error=>{
        console.log(error)
      })
    
  }

  useEffect(() => {
    if (params.id !== ACTIONS.CREATE) {
    }
    inputAdminFields.map(input=> {
      if(input.name === "categoryId"){
        input.options = category.map(category => ({id: category.id, label: category.categoryName}))
      }
    })

  }, [category])

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

