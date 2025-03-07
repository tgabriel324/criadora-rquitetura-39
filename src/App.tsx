
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Bruno from "./pages/Bruno";
import Modelo1 from "./pages/Modelo1";
import HelloHelp from "./pages/HelloHelp";
import NovelaBook from "./pages/NovelaBook";
import BravoHomem from "./pages/BravoHomem";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bruno" element={<Bruno />} />
        <Route path="/modelo1" element={<Modelo1 />} />
        <Route path="/hello-help" element={<HelloHelp />} />
        <Route path="/novela-book" element={<NovelaBook />} />
        <Route path="/bravo-homem" element={<BravoHomem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
