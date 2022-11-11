import { data } from "../utilis/data";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer =  () => {

    const  [dato,setDato] = useState({});
    const { idItem } = useParams()
    useEffect (() => {
        setTimeout(() => {
            setDato(data.find(item => item.id === parseInt(idItem) ));
        },2000);
    }, [idItem]);

    return(
        <>
        <ItemDetail key={dato.id} id ={ dato.id }  img ={ dato.img } title = {dato.title} description = {dato.description} price= {dato.price} />
        </>
    )
}
export default ItemDetailContainer;