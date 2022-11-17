import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import '../assets/styles/CartWidget.css'

const CartWidget = () => {

	return (
		<>
			<Badge color="secondary" badgeContent={0}>
			<ShoppingCartOutlined />
			</Badge>
		</>
	)
};

export default CartWidget;