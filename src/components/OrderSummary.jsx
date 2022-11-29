import { useContext } from "react"
import { CartContext } from "./CartContext";
import { collection, serverTimestamp } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import db from "../utilis/firebaseConfig"


const OrderSummary = () => {

    const { cartList, sumCartPrice, discount,sumTot, clear } = useContext(CartContext)
    const createOrder = () => {
        let order = {
          buyer: {
            name: "Jonatan Bustamante",
            email: "jonatabustamante710@gmail.com",
            phone: "2241553190"
          },
          date: serverTimestamp(),
          items: cartList.map(
            item => ({
              id:item.idItem,
              price:item.priceItem,
              title:item.nameItem,
              qty: item.quantityItem
            })
          ),
          tot: sumTot(),
        }   
        const createOrderFirestore = async () => {
            const newOrderRef = doc(collection(db,'orders'))
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderFirestore()
            .then(response => {
                 alert(`La compra con ha sido un exito`);
                 clear();   
                })
            .catch(err => console.log(err))
      }
    return (
        <>
            <div className="border border-secondary w-100 h-50 p-2 text-uppercase">
                <h5 className="p-1">Orden de compra</h5>
                <p>Sub total : ${sumCartPrice()}</p>
                <p>Descuento 20% : -${discount()}</p>
                <p>Total : ${sumTot()}</p>
                <button className="btn btn-primary w-100" onClick={createOrder}>check now</button>
            </div>
        </>
    )
}
export default OrderSummary;