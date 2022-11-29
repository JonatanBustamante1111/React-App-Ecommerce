import { useContext } from "react";
import { Table } from "react-bootstrap";
import { CartContext } from "./CartContext";
import TableCart from "./TableCart";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";

const Cart = () => {
    
    const { cartList, clear} = useContext(CartContext)

    return (
        <> 
        <Link to='/'><h2 className="btn">Continua comprando</h2></Link>
        {
          cartList.length > 0 &&
          <Table className="text-center">
      
          <thead>
          <tr className='text-center'>
            <th className="w-25">Producto</th>
            <th className="w-25">Cantidad/Precio
            </th>
            <th className="text-start">Sub Total</th>
          </tr>
          </thead>  
          </Table>
        }
      <div className="d-flex flex-column flex-nowrap align-items-center flex-md-row justify-content-md-between">
        
          <div className="w-100 w-md-75">
            {
              // si el carrito tiene productos los muestro
              cartList.length > 0 &&
                  cartList.map(item => <TableCart key={item.idItem} id={item.idItem} img={item.imgItem} title={item.nameItem} qty={item.quantityItem} price={item.priceItem}></TableCart>)
            }
          </div>
            <div className="w-50 order-3 w-md-25 h-md-50 p-2 order-1">
              {
                  cartList.length > 0 &&
                  <OrderSummary></OrderSummary>
              }
            </div>
      </div>

        <div>
          {
            (cartList.length > 0)
            ? <button className="btn btn-danger m-4" onClick={clear}>Vaciar carrito</button>
            : <h2 className="text-center uppercase">tu carrito esta vacio</h2>
          }
        </div>
    </>
    )
}
export default Cart;