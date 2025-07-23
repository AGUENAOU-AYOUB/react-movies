import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import "./App.css";
function App() {
  return (
    <div className="mainContainer">
      <Navbar className="nav"/>
      <div className="routes">
        <Routes className="routes">
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
