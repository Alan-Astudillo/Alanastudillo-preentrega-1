import Tarjeta from "./components/cardwidget";
import productos from "./components/itemlistocontainer";
import Navbar from "./components/navbar";
function App() {
  const handleDelete = (id) => {
    let producto = productos.filter((producto) => producto.id !== id);
  };

  return (
    <div className="App">
      <Navbar />
      <h1>Mis Productos</h1>
      {productos.map((producto) => (
        <Tarjeta
          key={producto.id}
          producto={producto}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
