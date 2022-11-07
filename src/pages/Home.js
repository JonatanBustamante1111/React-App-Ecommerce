import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";

const Home = () => {
    return(
        <div>
            <NavBar />
            <ItemListContainer greeting="Hola mundo"/>
        </div>
    )
}

export  default Home;