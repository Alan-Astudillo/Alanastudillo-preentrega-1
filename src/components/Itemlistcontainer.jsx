import productos from "./array";
import React from "react";
import { Card, Button } from "react-bootstrap";

const ItemListContainer = () => {
  const renderProductos = () => {
    return productos.map((producto) => (
      <Card style={{ width: "18rem" }} key={producto.id}>
        <Card.Img variant="top" src={producto.image} alt={producto.nombre} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            ID: {producto.id} <br />
            Precio: ${producto.precio}
          </Card.Text>
          <Button variant="primary">Ver detalles</Button>
        </Card.Body>
      </Card>
    ));
  };

  return <div className="card-container">{renderProductos()}</div>;
};

export default ItemListContainer;
