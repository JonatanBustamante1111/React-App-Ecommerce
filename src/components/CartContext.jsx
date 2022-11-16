import { useState } from "react";
import { createContext } from "react";

// espacio en memoria
export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList([
            ...cartList,item
        ])
    }
    
    return (
    
    <CartContext.Provider value={{cartList,addToCart}}>

        {props.children}

    </CartContext.Provider>
    )
}


export default CartContextProvider;