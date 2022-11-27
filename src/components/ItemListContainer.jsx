import ItemList from "./ItemList";
import Wrapper from "./Wrapper";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import {db} from '../utilis/firebaseConfig'
import{collection, getDocs} from "firebase/firestore"
import { CartContext } from "./CartContext"
import { useContext } from "react"
// import firestoreFetch from "../utilis/firestoreFetch";

const ItemListContainer = ({ greeting }) => {
    // url params
    const {datos,setDatos} = useContext(CartContext)

    const { idCategory } = useParams()

    async function getProductos() {
        const collectionRef = collection(db, "products");
        let results = await getDocs(collectionRef);
        let dataProductos = results.docs.map( doc => { 
            return { id: doc.id, ...doc.data()};
           })
        return dataProductos;  
    }
    
     useEffect(() =>    {
      getProductos().then((data) => {
        if (idCategory === undefined) {
            setTimeout(() => {
                setDatos(data);
            },2000);
        } else {
            setTimeout(() => {
                setDatos(data.filter(item => item.categoryId == idCategory));
            },2000);
        }
     });
    }) 
    // useEffect(() => {
    //     firestoreFetch(idCategory)
    //     .then(result => setDatos(result))
    //     .catch(err => console.log(err))
    // })

return (
    
    <>
            
         <Wrapper>{greeting}</Wrapper>
         <ItemList items={datos}  />
    </>
)
}
export default ItemListContainer;