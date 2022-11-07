import ItemList from "./ItemList";
import Wrapper from "./Wrapper";
import { data } from "../utilis/data";
import { useEffect, useState } from "react";


const ItemListContainer =  ({greeting}) => {

    const  [datos,setDatos] = useState([]);

    useEffect (() => {
        setTimeout(() => {
            setDatos(data);
        },2000);
    }, []);

    return(
        <>
        <Wrapper>{greeting}</Wrapper>
        <ItemList items={datos} />
        </>
    )
}
export default ItemListContainer;