import Item from "./Item";
import "../assets/styles/Item.css"

// esta funcion renderiza las componentes de los libros en un contenedor padre
const ItemList = ({items}) => {  
    return( 
   <div className='d-flex align-items-center flex-wrap justify-content-center gap-3'>
    { items.length > 0   
        ? items.map( item => 
            <Item
                key={item.id} 
                id={item.id} 
                img = {item.img} 
                title = {item.title} 
                description = {item.description} 
                price = {item.price} />
                )
        : <p>Cargando...</p>
    } 
   </div> 
   ) 
   }
export default ItemList;