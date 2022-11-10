import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import NavBar from "../components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>    
                <Route path="/" element={<ItemListContainer greeting="Hola mundo" />} />
                {/* idCategory = url params */}
                <Route path="/category/:idCategory" element={<ItemListContainer greeting="Hola mundo" />} />   
                <Route path="/item/:idItem" element={<ItemDetailContainer />}/>   
            </Routes>
        </BrowserRouter>
    )
}

export default Home;