import image from '../assets/image/cart.png'
import '../assets/styles/CartWidget.css'
import { Link } from "react-router-dom";

const CartWidget = () =>{
	return (
		<Link to='/Cart'>
		<div className="shoping__cart cart">
		<img src={image} alt='img'/>
		</div>
		</Link>
	)
};

export default CartWidget;