import {createContext, useState } from "react";

export const CartContext = createContext();


const CartContextProvider = (props) => {
    // estado local
    const [cartList, setCartList] = useState([]);
    // setea el valor del array Cartlist
    const addToCart = (item) => {
            setCartList(item);
    }

    return (
        // cartList pasa a ser estado global
        <CartContext.Provider value={{cartList,addToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider();
