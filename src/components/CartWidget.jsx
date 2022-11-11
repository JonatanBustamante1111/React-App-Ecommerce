import image from '../assets/image/cart.png'
import '../assets/styles/CartWidget.css'

const CartWidget = () =>{
	return (
		<>
		<div className="shoping__cart cart"><img src={image } alt='img'/></div>
		</>
	)
};

export default CartWidget;