import "../assets/styles/Item.css"
import { Link } from "react-router-dom";
// funcion que renderiza
const  Item = ({id,img,name,description,price}) => {
  return (
    <>
      <div className="contenedor-principal">
        <figure className="snip1268">
          <div className="image">
            <img src={img} alt="sq-sample4" />
            <div className="icons d-flex justify-content-center">
              {/* <a href="#"><i className="ion-star"></i></a> */}
              {/* <a href="#"> <i className="ion-share"></i></a> */}
              <Link to={`/item/${id}`}><i class="ion-search"></i></Link>
            </div>
            <Link   class="add-to-cart">Agregar a Carrito</Link>
          </div>
          <figcaption>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="price">${price}</div>
          </figcaption>
        </figure>
      </div>

    </>
  );
}

export default Item; 