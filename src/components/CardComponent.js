import "../assets/styles/CardComponent.css"

// funcion que renderiza
function CardComponent(props) {
  return (
    <>
      <figure class="snip1268">
        <div className="image">
          <img src={props.img} alt="sq-sample4" />
          <div className="icons d-flex justify-content-center">
            {/* <a href="#"><i className="ion-star"></i></a>
            <a href="#"> <i class="ion-share"></i></a> */}
            <a href="#"> <i class="ion-search"></i></a>
          </div>
          <a href="#" class="add-to-cart">Agregar a Carrito</a>
        </div>
        <figcaption>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <div className="price">{props.price}</div>
        </figcaption>
      </figure>
    </>
  );
}

export default CardComponent; 