

const OrderSummary = (subtot,desc,tot,createOrder) => {
    return (
        <>
            <div className="border border-dark w-100 h-50 p-2 text-uppercase">
                <h5 className="p-1">Orden de compra</h5>
                <p>Sub total : ${subtot}</p>
                <p>Descuento 20% : -${desc}</p>
                <p>Total : ${tot}</p>
                <button className="btn btn-primary w-100" onClick={createOrder}>check now</button>
            </div>
        </>
    )
}
export default OrderSummary;