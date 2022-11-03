import Cards from "../containers/Cards";
const ItemListContainer =  ({greeting}) => {
    return(
        <>
        <h1 className="text-center">{greeting}</h1>
        <Cards/>
        </>
    )
}
export default ItemListContainer;