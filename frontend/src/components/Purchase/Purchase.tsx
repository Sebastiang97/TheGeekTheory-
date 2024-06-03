
import "./purchase.css"
interface props{
    img: string
    title: string
    action: string
    size: string
    quantity: string
}

export const Purchase = ({img, title, action, size, quantity}: props) => {
  return (
    <article className="purchase">
        <div className="containerImg">
            <img src={img} alt={title} />
        </div>
        <section className="details">
            <header>
                <h3>{title}</h3>
                <p className="delete">{action}</p>
            </header>
            <p className="content">
                Talla: {size}
            </p>
            <p className="content">
                Cantidad: {quantity}
            </p>
        </section>
    </article>
  )
}
