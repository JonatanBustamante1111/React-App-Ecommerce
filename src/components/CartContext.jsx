import { useState } from "react";
import { createContext } from "react";

// espacio en memoria
export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cartList, setCartList] = useState([]);

    // Si el item existe
    const addToCart = (item) => {
        let exist = cartList.find(element => element.id === item.id);
        if (exist) {
            console.log('esta ok')
        } else {
            setCartList([
                ...cartList, item
            ])
        }
    }

    const clear = () => {
        // colocamos otro array 
        setCartList ([]);
    }

    const deleteItem = (item) => {
          const newArray = cartList.filter(element => element.id !== item.id)
            setCartList(newArray)
        }

    return (

        <CartContext.Provider value={{ cartList, addToCart, clear, deleteItem }}>

            {props.children}

        </CartContext.Provider>
    )
}


export default CartContextProvider;