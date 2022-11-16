import { BrowserRouter, Route, Routes } from 
'react-router-dom';
import Cart from '../components/Cart';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import CartContextProvider from '../components/CartContext'
import NavBar from '../components/NavBar';

const Home = () => {

    return (
        <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>    
                <Route path="/" element={<ItemListContainer greeting="Hola mundo" />} />
                {/* idCategory = url params */}
                <Route path="/category/:idCategory" element={<ItemListContainer greeting="Hola mundo" />} />   
                <Route path="/item/:idItem" element={<ItemDetailContainer />}/>   
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
        </CartContextProvider>
    )
}

export default Home;