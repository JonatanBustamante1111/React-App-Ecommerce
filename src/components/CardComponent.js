import "../assets/styles/CardComponent.css"

// funcion que renderiza
function CardComponent(props) {
  return (
    <>
    <div className="contenedor-principal">
    <figure class="snip1268">
  <div className="image">
    <img  src={props.img} alt="sq-sample4"/>
    <div className="icons">
      <a href="#"><i class="ion-star"></i></a>
      <a href="#"> <i class="ion-share"></i></a>
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
    </div>
    
</>
    // <Card className='p-2 gap' style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={props.img} />
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text>
    //       {props.description}
    //     </Card.Text>
    //     <Card.Title>{props.price}</Card.Title>
    //     <Button className='' variant="primary">Agregar</Button>
    //   </Card.Body>
    // </Card>
  );
}

export default CardComponent ; 