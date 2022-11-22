import { useState } from "react";
import { createContext } from "react";

// espacio en memoria
export const CartContext = createContext();


const CartContextProvider = (props) => {
    
    const [cartList, setCartList] = useState([]);


    // Si el item existe
    const addToCart = (item,qty) => {
        let found = cartList.find(element => element.id === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList, {
                    idItem: item.id,
                    imgItem:item.img,
                    nameItem: item.title,
                    quantityItem:qty,
                    priceItem: item.price,
                }
            ])
        } else {
            found.quantityItem += qty;
        }
    }

    const sumCartQuantity = () => { 
        let acc = 0;  
        cartList.map(item => acc += item.quantityItem);
        return acc;
    }
    const sumCartPrice = () => {
        let acc = 0;
        cartList.map(item => acc += (item.quantityItem*item.priceItem));
        return acc;
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

        <CartContext.Provider value={{ cartList, addToCart, clear, deleteItem,sumCartQuantity,sumCartPrice}}>

            {props.children}

        </CartContext.Provider>
    )
}


export default CartContextProvider;