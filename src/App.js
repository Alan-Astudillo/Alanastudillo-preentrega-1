import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/itemlistcontainer";
import Navbart from "./components/navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Navbart" element={<Navbart />} />
          <Route path="/navbart/:id" element={<Navbart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
