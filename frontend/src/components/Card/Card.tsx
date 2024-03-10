export interface Props {
    img: string
    price: number 
    name: string
    style: string
    className: string
}

export const Card = ({img, price, name, style, className}: Props) => {
  return (
    <article className={className}>
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
