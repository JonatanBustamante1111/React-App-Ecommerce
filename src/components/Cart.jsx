import { useContext } from "react";
import { Table } from "react-bootstrap";
import { CartContext } from "./CartContext";
import TableCart from "./TableCart";
import { Link } from "react-router-dom";

const Cart = () => {
    
    const { cartList, sumCartPrice, clear } = useContext(CartContext)
    return (
        <> 
        <Link to='/'><h2 className="btn">Continua comprando</h2></Link>
        {
          cartList.length > 0 &&
          <Table className="text-center">
      
          <thead>
          <tr className='text-center'>
            <th>Producto</th>
            <th>Cantidad/Precio
            </th>
            <th className="text-start">Sub Total</th>
          </tr>
          </thead>  
          </Table>
        }
       
      {
        // si el carrito tiene productos los muestro
        cartList.length > 0 &&
            cartList.map(item => <TableCart key={item.idItem} id={item.idItem} img={item.imgItem} title={item.nameItem} qty={item.quantityItem} price={item.priceItem}></TableCart>)
      }
        {
          (cartList.length > 0)
          ? <button className="btn btn-danger m-4" onClick={clear}>Vaciar carrito</button>
          : <h2 className="text-center uppercase">tu carrito esta vacio</h2>
        }
        {
          cartList.length > 0 &&
          <div className="text-end p-5">TOTAL: {sumCartPrice()}</div>
        }
     
    </>
    )
}
export default Cart;