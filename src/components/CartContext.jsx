import { useState } from "react";
import { createContext } from "react";

// espacio en memoria
export const CartContext = createContext();


const CartContextProvider = (props) => {
    
    const [cartList, setCartList] = useState([]);


    // Si el item existe
    const addToCart = (item,qty) => {
        let exist = cartList.find(element => element.id === item.id);
        if (exist === undefined) {
            setCartList([
                ...cartList, {
                    idItem: item.id,
                    imgItem:item.img,
                    nameItem: item.title,
                    quantityItem:qty,
                }
            ])
        } else {
            exist.quantityItem += qty;
        }
    }

    const sumCartQuantity = () => { 
        let acc = 0;  
        cartList.map(item => acc = acc+item.quantityItem);
        return acc;
    }
    console.log(sumCartQuantity())
    const clear = () => {
        // colocamos otro array 
        setCartList ([]);
    }

    const deleteItem = (item) => {
          const newArray = cartList.filter(element => element.id !== item.id)
            setCartList(newArray)
        }

    return (

        <CartContext.Provider value={{ cartList, addToCart, clear, deleteItem,sumCartQuantity}}>

            {props.children}

        </CartContext.Provider>
    )
}


export default CartContextProvider;