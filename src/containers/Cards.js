import { useState,useEffect } from 'react'
import { data } from '../utilis/data'
import { customFetch } from '../utilis/customFetch'
import CardComponent from '../components/CardComponent'

const Cards = () => {
    const [date, setDate] = useState([])


    useEffect (() => {
        customFetch (2000, data)
            .then(response => setDate(response))
            .cath(err => console.log(err))
    } , [])


    return(
        <>
            {
                 date.map(element =>(
                    <CardComponent
                    img = {element.img}
                    title = {element.title}
                    description = {element.description}
                    price = {element.price}
                    />
                 ))
            }
        
        </>
    )

}
export default Cards;