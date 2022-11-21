import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {

    const {cartList} = useContext(CartContext)
    console.log(cartList)
    return(
        // si el carrito tiene productos los muestro
         cartList.length > 0 
         ? cartList.map(item => <li>{item.title } {item.quantity}</li>)
         : <h2 className="text-center uppercase">tu carrito esta vacio</h2>
    )
}
export default Cart;