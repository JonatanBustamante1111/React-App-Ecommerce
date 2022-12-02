import { collection, orderBy, query,where,getDocs} from "@firebase/firestore";
import db from "./firebaseConfig"

 const firestoreFetch = async (idCategory) => {
    let q;
    
    if(idCategory){
        q = query(collection(db,"products"), where('categoryId', '==', idCategory));
    }else{
        q = query(collection(db,"products"), orderBy('name'));
    }
    const results = await getDocs(q);
    const dataFromFirestore = results.docs.map( doc => { 
        return { id: doc.id, ...doc.data()};
       })
    return dataFromFirestore;  
}
console.log(firestoreFetch)
export default firestoreFetch;  