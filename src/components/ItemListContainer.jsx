import ItemList from "./ItemList";
import Wrapper from "./Wrapper";
import { data } from "../utilis/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer =  ({greeting}) => {
    // url params
    const  [datos,setDatos] = useState([]);
    const { idCategory } = useParams()

    useEffect (() => {
        if (idCategory === undefined) {
            setTimeout(() => {
                setDatos(data);
            },2000);
        } else {

            setTimeout(() => {
                setDatos(data.filter(item => item.categoryId === idCategory));
            },2000);
        }
    }, [idCategory  ]);

    return(
        <>
        <Wrapper>{greeting}</Wrapper>
        <ItemList items={datos} />
        </>
    )
}
export default ItemListContainer;