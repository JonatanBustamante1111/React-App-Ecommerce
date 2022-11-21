import { useContext, useState } from "react"
import "../assets/styles/ItemDetail.css"
import { CartContext } from "./CartContext"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {

    const [itemCount,setItemCount] = useState(0);
    const {addToCart} = useContext(CartContext)

 
    const onAdd = (qty) => {
        setItemCount(item,qty)
        addToCart(item,qty)
    }

      
    return (
        item.price !== undefined
            ? <div className="image_detail d-flex flex-column align-items-center p-3 gap-3 flex-md-row justify-content-md-evenly p-md-5 ">
                <img  src={item.img} alt="" />
                <div className="d-flex flex-column align-items-center">
                    <h2 className="my-2 text-center fs-9 fw-bold text-uppercase">{item.title}</h2>
                    <p className="mx-5 p-5">{item.description}</p>
                    <h3 className="my-4 text-center fw-bold">{`$ ${item.price}`}</h3>
                    {
                        itemCount === 0 
                        ? <ItemCount initial ={itemCount}  onAdd={onAdd}/>
                        :<Link to='/cart'><button className="btn btn-primary">Ver carrito</button></Link> 
                    }
                </div>
              </div>
            : <p className="text-center">Cargando...</p>
    )

}


export default ItemDetail;