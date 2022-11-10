import "../assets/styles/ItemDetail.css"
import ItemCount from "./ItemCount"

const ItemDetail = ({ img, title, description, price }) => {

    return (
        price !== undefined
            ? <div className="image_detail d-flex flex-column align-items-center flex-md-row justify-content-md-between p-md-5">
                <img  src={img} alt="" />
                <div className="text-center">
                    <h2 className="my-2">{title}</h2>
                    <p className="my-2">{description}</p>
                    <h3 className="my-5">{`$ ${price}`}</h3>
                    <ItemCount />
                </div>
              </div>
            : <p className="text-center">Cargando...</p>
    )

}


export default ItemDetail;