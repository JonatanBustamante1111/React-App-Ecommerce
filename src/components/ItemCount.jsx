
const ItemCount = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="d-flex gap-3 justify-content-center">
        <input className="w-25" id="inputCantidad" type="number" min="1" value="1"></input>
        <button className="btn btn-primary">ADD TO CART</button>
        </div>
    )
};
// algo
export default ItemCount;