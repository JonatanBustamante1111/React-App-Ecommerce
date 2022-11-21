import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
	const {sumCartQuantity} = useContext(CartContext);	
	
	return (
		<>
			<Badge badgeContent={sumCartQuantity()} color="secondary" >
			<ShoppingCartOutlined />
			</Badge>
		</>
	)
};

export default CartWidget;