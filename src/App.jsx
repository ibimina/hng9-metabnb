import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, PlaceToStay } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="placetostay" element={<PlaceToStay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
