import Table from 'react-bootstrap/Table';
import "../assets/styles/TableCart.css";

function TableCart({img,qty,price}) {
  return (
    <Table striped bordered hover size="sm" className='m-0'>
      <tbody>
        <tr className='text-center'>
          <td className='d-flex justify-content-center '><img className='img__TableCart p-2' src={img} alt="" /></td>
          <td>{qty} x {price}</td>  
          <td>{price*qty}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableCart;