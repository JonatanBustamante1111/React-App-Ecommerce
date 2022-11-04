import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent(props) {
  return (
    <Card className='p-2 gap' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Title>{props.price}</Card.Title>
        <Button className='' variant="primary">Agregar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent ; 