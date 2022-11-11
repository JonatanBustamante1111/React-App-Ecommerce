import "../assets/styles/ItemDetail.css"
import ItemCount from "./ItemCount"

const ItemDetail = ({ img, title, description, price }) => {

    return (
        price !== undefined
            ? <div className="image_detail d-flex flex-column align-items-center flex-md-row justify-content-md-evenly p-md-5">
                <img  src={img} alt="" />
                <div className="">
                    <h2 className="my-2 text-right fs-9 fw-bold text-uppercase">{title}</h2>
                    <p className="my-2">{description}</p>
                    <h3 className="my-4 fw-bold">{`$ ${price}`}</h3>
                    <ItemCount />
                </div>
              </div>
            : <p className="text-center">Cargando...</p>
    )

}


export default ItemDetail;