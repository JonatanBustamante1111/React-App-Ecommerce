import './App.css'
import NavBar from '../src/components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos"/>
    </>
  );
}

export default App;
