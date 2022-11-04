import { useState,useEffect } from 'react'
import { data } from '../utilis/data'
import CardComponent from '../components/CardComponent'


// esta funcion renderiza las componentes de los libros en un contenedor padre
const Cards = () => {
    const [datos, setDate] = useState([])


    useEffect (() => {
        setTimeout(() => {
            setDate(data);
        },2000);
    } , []);


    return(
        <>
        <div className='d-flex align-items-center flex-wrap justify-content-center gap-3'>
            {
                 datos.map(element =>(
                    <CardComponent
                    img = {element.img}
                    title = {element.title}
                    description = {element.description}
                    price = {element.price}
                    />
                 ))
           
            }
        </div>    
        </>
    )

}
export default Cards;