import { useState } from "react";
import { createContext } from "react";

// espacio en memoria
export const CartContext = createContext();


const CartContextProvider = (props) => {
    const [datos, setDatos] = useState([]);

    const [cartList, setCartList] = useState([]);

    // Si el item existe

    const addToCart = (item,qty) => {
        let found = cartList.find(element => element.idItem === item.id)
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
        }else{
            const cartUpdated = cartList.map(element => {
                if(element.idItem === item.id){
                    return{...element,quantityItem:element.quantityItem +qty,}
                }else {
                    return element;
                }
            })
            setCartList(cartUpdated);
        }
    }

    const sumCartQuantity = () => { 
        let acc = 0;  
        cartList.forEach(item => acc += item.quantityItem);
        return acc;
    }
    const sumCartPrice = () => {
        let acc = 0;
        cartList.map(item => acc += (item.quantityItem*item.priceItem));
        return acc;
    }
    const discount = () => {
        const subTot = sumCartPrice();
        return subTot*20/100;
    }
    const sumTot = () => {
        const subTot = sumCartPrice();
        const desc = discount();
        return subTot-desc;
    }
    const clear = () => {
        setCartList ([]);
    }

    const deleteItem = (id) => {
          const newArray = cartList.filter(element => element.idItem !== id )
            setCartList(newArray)
        }

    return (

        <CartContext.Provider value={{datos,setDatos, cartList, addToCart, clear, deleteItem,sumCartQuantity,sumCartPrice,discount,sumTot}}>

            {props.children}

        </CartContext.Provider>
    )
}


export default CartContextProvider;