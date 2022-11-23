import { useContext } from "react";
import { Table } from "react-bootstrap";
import { CartContext } from "./CartContext";
import TableCart from "./TableCart";

const Cart = () => {
    
    const { cartList, sumCartPrice } = useContext(CartContext)
    return (
        <>
        <Table>
        <thead>
        <tr className='text-center'>
          <th>Producto</th>
          <th>Cantidad/Precio
          </th>
          <th>Sub Total</th>
        </tr>
        </thead>  
        </Table>
      {
        // si el carrito tiene productos los muestro
        cartList.length > 0
            ?
            cartList.map(item => <TableCart key={item.idItem} id={item.idItem} img={item.imgItem} title={item.nameItem} qty={item.quantityItem} price={item.priceItem}></TableCart>)
            : <h2 className="text-center uppercase">tu carrito esta vacio</h2>
      }
      <div className="text-end p-5">TOTAL: {sumCartPrice()}</div>
    </>
    )
}
export default Cart;