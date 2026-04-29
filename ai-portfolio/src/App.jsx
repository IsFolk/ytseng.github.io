import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MultiAgent from "./pages/MultiAgent";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/multi-agent-ai" element={<MultiAgent />} />
    </Routes>
  );
}