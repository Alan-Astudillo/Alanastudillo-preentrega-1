export default function name(id, nombre, img, precio) {
  <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>${nombre}</Card.Title>
        <Card.Text>${precio}</Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>
  </div>;
}
