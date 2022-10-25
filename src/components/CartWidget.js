import image from '../assets/image/cart.png'
import '../assets/styles/CartWidget.css'

const CartWidget = () =>{
	return (
		<>
		<div className="shoping__cart cart"><img src={image} /></div>
		</>
	)
};

export default CartWidget;