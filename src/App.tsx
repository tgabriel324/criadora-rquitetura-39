
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BravoHomem from "./pages/BravoHomem";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BravoHomem />} />
        <Route path="/bravo-homem" element={<BravoHomem />} />
      </Routes>
    </Router>
  );
}

export default App;
