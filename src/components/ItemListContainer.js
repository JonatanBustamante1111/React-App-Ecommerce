import Cards from "../containers/Cards";
import Wrapper from "./Wrapper";
const ItemListContainer =  ({greeting}) => {
    return(
        <>
        <Wrapper>{greeting}</Wrapper>
        <Cards/>
        </>
    )
}
export default ItemListContainer;