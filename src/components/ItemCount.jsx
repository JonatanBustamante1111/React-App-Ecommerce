
const ItemCount = () => {
    return (
        <div className="d-flex gap-3 justify-content-center">
        <input className="w-25" id="inputCantidad" type="number" min="1" value="1"></input>
        <button className="btn btn-primary">ADD TO CART</button>
        </div>
    ) 
};

export default ItemCount;