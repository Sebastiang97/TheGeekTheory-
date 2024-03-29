import { Editar } from "@@/icons/Editar"
import { useNavigate } from "react-router"

export interface Props {
    img: string
    price: number 
    name: string
    style: string
    className: string
    id:string
}

export const Card = ({id ,img, price, name, style, className}: Props) => {
  const navigate = useNavigate()
  
  return (
    <article className={className}>
      <div 
        className="update"
        onClick={() => navigate("/admin/products/actions/"+id)}
        >
        <Editar />
      </div>
      <div>
          <img 
              src={img} 
              alt="Product" 
          />
      </div>
      <section>
        <h4>{name}</h4>
        <small>{price}</small>
      </section>
    </article>
  )
}
