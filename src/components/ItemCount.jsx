import { Add, Remove } from '@mui/icons-material';
import { useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    if(count <=0){
        setCount(count + 1)
    }
    return (
            <div className='px-2 d-flex gap-2 align-items-center'>
                <button className='border-0' variant="text " onClick={increment}><Add /></button>
                <div className='fs-4'>{count}</div>
                <button className='border-0' variant="text" onClick={decrement}><Remove /></button>
            </div>
    )
};

export default ItemCount;