export interface Props {
    img: string
    price: number 
    name: string
    style: string
    className: string
}

export const Card = ({img, price, name, style, className}: Props) => {
  return (
    <div className={className}>
        <div>
            <img 
                src={img} 
                alt="Product" 
            />
        </div>
        <h2>{name}</h2>
        <small>{price}</small>
    </div>
  )
}
