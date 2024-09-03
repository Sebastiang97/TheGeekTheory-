import { useState } from "react"
import { PreviewProductUsers } from "@@/PreviewProductsUser/PreviewProductsUser"
import { CategoryList } from "@@/Lists/CategoryList/CategoryList"
import { Counter } from "@@/Counter/Counter"
import { useSubCategoryStore } from "@/libs/store/zustand/useSubCategoryStore"
import { useProductStore } from "@/libs/store/zustand/useProductStore"
import { Product } from "@/Models/Product"
import "./catalog.css"

export const Catalog = () => {
    
    const getSubByCategoryId = useSubCategoryStore(state => state.getSubByCategoryId)
    
    const productsSubById = useProductStore(state => state.productsSubById)
    const getProductsBySubId = useProductStore(state => state.getProductsBySubId)
    
    const [product , setProduct] = useState<Product>({} as Product)
    
    const [sizes , setSizes] = useState<string[]>([])
    
    const [size , setSize] = useState<string>("")

    const changeProduct = (codeSize:string) =>{

        const product = productsSubById.find(product => product.size === codeSize)
        if(product){
            setProduct(product)
            setSize(product.size)
        }
    }
    const getSubCategoryAndProduct = (categoryId:string) =>{
        getSubByCategoryId(categoryId)
            .then(subByCategoryId=>{
                // console.log({subByCategoryId})
                getProductsBySubId(subByCategoryId[0]?.id)
                    .then(products=>{
                        // console.log({products})
                        if(products.length){
                            let sizes: string[] = []
                            products.map(product=>{
                                sizes.push(product.size)
                            })
                            setProduct(products[0])
                            setSize(products[0].size)
                            setSizes(sizes)
                        }
                    }).catch(err=>{
                        console.log(err)
                    })
            }).catch(err=>{
                console.log(err)
            })
    }

  return (
    <>
        <CategoryList getCurrentCategoryId={getSubCategoryAndProduct} />
        {
            (productsSubById.length && Object.keys(product).length) && (
                <section className="products">
                    <article className="cardProducts">
                        <div className="preview">
                            <PreviewProductUsers 
                                images={product.urlImage as any}
                                currentImage={product.urlImage[0].url}
                            />
                        </div>
                        <section className="info">
                            <header>
                                <h3>
                                    {product.name}
                                </h3>
                                <small>COP<span>{product.price}</span></small>
                            </header>
                            <p className="content">
                                {product.description}
                            </p>
                            <section className="colors">
                                <header>
                                    <h4>Color</h4>
                                </header>
                                <div className="listColors">
                                    {
                                        Array.from({ length: 6 }, (_, i) => (
                                            <div key={i}></div>
                                        ))
                                    }
                                </div>
                            </section>

                            <section className="sizes">
                                <header>
                                    <h4>Size</h4>
                                </header>
                                <div className="listSize">
                                    {
                                        sizes.map(s=>(
                                            <button 
                                                key={s}
                                                className={s === size ? "" : "secondary" } 
                                                onClick={() => changeProduct(s)}
                                            >
                                                {s}
                                            </button>
                                        ))
                                    }
                                </div>
                                <p className="content">Guia de tallas</p>
                            </section>

                            <section className="actions">
                                
                                <Counter 
                                    initialState={1}
                                    product={product}
                                />
                            </section>

                            <section className="charges">
                                <p className="content">Cargos</p>
                            </section>

                        </section>
                    </article>
                </section>
            )
        }
    </>
  )
}

