import "../assets/styles/Item.css"
// funcion que renderiza
const  Item = ({id,img,name,description,price}) => {
  console.log(name)
  return (
    <>
      <div className="contenedor-principal">
        <figure class="snip1268">
          <div className="image">
            <img src={img} alt="sq-sample4" />
            <div className="icons d-flex justify-content-center">
              {/* <a href="#"><i class="ion-star"></i></a> */}
              {/* <a href="#"> <i class="ion-share"></i></a> */}
              <a href="#"> <i class="ion-search"></i></a>
            </div>
            <a href="#" id={id} class="add-to-cart">Agregar a Carrito</a>
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