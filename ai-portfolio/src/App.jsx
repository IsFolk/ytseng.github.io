import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MultiAgent from "./pages/MultiAgent";
import Contact from "./components/Contact";
import AIBehavior from "./pages/AIBehavior";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/multi-agent-ai" element={<MultiAgent />} />
        <Route path="/projects/ai-behavior" element={<AIBehavior />} />
      </Routes>

      <Contact />
    </>
  );
}