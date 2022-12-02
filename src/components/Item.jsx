import "../assets/styles/Item.css"
import { Link } from "react-router-dom";
// funcion que renderiza
const  Item = (item) => {

  return (
    <>
      <div className="contenedor-principal">
        <figure className="snip1268">
          <div className="image">
            <img src={item.img} alt="sq-sample4" />
            <div className="icons d-flex justify-content-center">
              {/* <a href="#"><i className="ion-star"></i></a> */}
              {/* <a href="#"> <i className="ion-share"></i></a> */}
              {/* <Link><i class="ion-search"></i></Link> */}
            </div>
            <Link  class="add-to-cart" to={`/item/${item.id}`} >Ver detalle</Link>
          </div>
          <figcaption>
            <div className="price">
              ${item.price}
              </div>
          </figcaption>
        </figure>
      </div>

    </>
  );
}

export default Item; 