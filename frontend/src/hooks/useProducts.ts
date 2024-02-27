import { useEffect, useState } from "react"
import { Product } from "@/Models/Product"
import { URL_PRODUCTS } from "@/constants/service.constant"
import { baseService } from "@/Services/base.service"

export const useProducts = () => {

    const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    baseService(URL_PRODUCTS).list<Product>()
      .then(products => {
        setProducts(products)
        console.log({ products })
      })
  }, [])

  
  return [
    products
  ]
}
