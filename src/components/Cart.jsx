import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    // hooks
    const {cartList} = useContext(CartContext);
    console.log(cartList)
    return (
        <>
            <h2 className="text-center p-5">TU CARRITO</h2>
            <ul>
                {
                    cartList.lenght === 0
                        ? <li>Tu carrito esta vacio</li>
                        : test.map(item => <li>{item.name}</li>)
                }
            </ul>
        </>
    )
}

export default Cart;    