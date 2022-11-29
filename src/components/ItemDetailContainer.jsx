import {useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc,getDoc } from "firebase/firestore";
import db from "../utilis/firebaseConfig"

const ItemDetailContainer =  () => {
    const  [dato,setDato] = useState({});

    const { idItem } = useParams()

    async function getProducto () {
        const docRef = doc(db,"products", idItem)
        const result = await getDoc(docRef);

        if(result.exists()){
            return{
                id:idItem,
                ...result.data()
            }
        } else {
            console.log("no such document")
        }
    }

    useEffect (() => {
        getProducto()
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }) 


    return(
        <>
        <ItemDetail  item = {dato}/>
        </>
    )
}
export default ItemDetailContainer;