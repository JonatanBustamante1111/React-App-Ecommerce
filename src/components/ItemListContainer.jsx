import ItemList from "./ItemList";
import Wrapper from "./Wrapper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {db} from '../utilis/firebaseConfig'


const ItemListContainer = ({ greeting }) => {
    // url params
    const [datos, setDatos] = useState([]);
    console.log(datos)
    const { idCategory } = useParams()

    useEffect(()=>{
        async function fetchData(){
            const response = await db.getData(datos);
        }
        fetchData()
     
    },[datos])
    // useEffect( async () => {
    //     const querySnapshot = await getDocs(collection(db, "products"));
    //     const dataFromFirestore = querySnapshot.docs.map(item => ({
    //         id: item.id,
    //         ...item.data()
    //     }))
    //     setDatos(dataFromFirestore)
    // })
    console.log(datos)
    // useEffect(() => {
    //     return( () => {
    //         setDatos([])
    //     })
    // }, [])

        //     useEffect (() => {
//         if (idCategory === undefined) {
//             setTimeout(() => {
//                 setDatos(data);
//             },2000);
//         } else {
//             setTimeout(() => {
//                 setDatos(data.filter(item => item.categoryId === idCategory));
//             },2000);
//         }
// }, [idCategory]);


return (
    
    <>
            
         <Wrapper>{greeting}</Wrapper>
         <ItemList items={datos}  />
    </>
)
}
export default ItemListContainer;