const Tarjeta = ({ producto, onDelete }) => {
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />
      <div>
        <h3>{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
        <button onClick={() => onDelete(producto.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default Tarjeta;
