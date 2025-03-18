
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BravoHomem from "./pages/BravoHomem";
import EmpatIA from "./pages/EmpatIA";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BravoHomem />} />
        <Route path="/bravo-homem" element={<BravoHomem />} />
        <Route path="/empatia" element={<EmpatIA />} />
      </Routes>
    </Router>
  );
}

export default App;
