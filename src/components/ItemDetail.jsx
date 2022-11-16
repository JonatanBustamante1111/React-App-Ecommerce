import { useContext } from "react"
import "../assets/styles/ItemDetail.css"
import { CartContext } from "./CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    const {addToCart} = useContext(CartContext)

    const onAdd = () => {
        console.log('ok')
        addToCart(item)

    }

    return (
        item.price !== undefined
            ? <div className="image_detail d-flex flex-column align-items-center p-3 gap-3 flex-md-row justify-content-md-evenly p-md-5 ">
                <img  src={item.img} alt="" />
                <div className="">
                    <h2 className="my-2 text-right fs-9 fw-bold text-uppercase">{item.title}</h2>
                    <p className="my-2">{item.description}</p>
                    <h3 className="my-4 fw-bold">{`$ ${item.price}`}</h3>
                    <div className="d-flex gap-3 justify-content-center w-100">
                    <ItemCount />
                    <button className="btn btn-primary" onClick={onAdd}>ADD TO CART</button>
                    </div>
                </div>
              </div>
            : <p className="text-center">Cargando...</p>
    )

}


export default ItemDetail;