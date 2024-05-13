import { Category } from '@/Models/Category'
import { Product } from '@/Models/Product'
import { baseService } from '@/Services/base.service'
import { URL_CATEGORY } from '@/constants/service.constant'
import { create } from 'zustand'

interface PropsUseProduct {
    categories: Category[],
    loading: boolean
    list: () => void
    listProductsCategory: (categoryId: string) => void
    getById: (id: string) => Category | undefined
    createCategory: (product: FormData)=> Promise<Category>
}

export const useCategoryStore = create<PropsUseProduct>(
    (set, get) => ({
        categories: [],
        loading: false,
        list: () => {
            if(!get().categories.length){
                set({loading: true})
                baseService(URL_CATEGORY).list<Category>()
                .then(categories => {
                    set({categories,loading: false})
                })
            }
        },
        getById:  (id:string) => get().categories.find(category=> category.id === id),
        listProductsCategory: async (categoryId: string)=>{
            const products = await baseService(`${URL_CATEGORY}/products/${categoryId}`).list<Product>()
            const categories = get().categories
            categories.map(category=>{
                if(category.id == categoryId ){
                    category.products = []
                    category.products?.push(...products)
                    console.log({category, products})
                    return category
                }
            })
            set({categories })
            console.log({categories: get().categories})
        },
        createCategory : async (formData:FormData) => {
            set({loading: true})

            const product = await baseService(URL_CATEGORY).createFile<any>(formData)
            const categories = get().categories

            categories.push(product)
            set({categories,loading: false})
            
            return product
        }
    })
)