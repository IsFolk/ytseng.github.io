import { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import Principles from "../components/Principles";
import About from "../components/About";
import Contact from "../components/Contact";
import Modal from "../components/Modal";
import MultiAgent from "./MultiAgent";
import AIBehavior from "./AIBehavior";

const projectComponents = {
  "multi-agent-ai": MultiAgent,
  "ai-behavior": AIBehavior,
};

export default function Home() {
  const [openProject, setOpenProject] = useState(null);

  const ProjectComponent = openProject ? projectComponents[openProject] : null;

  return (
    <main className="page">
      <Hero />
      <About />
      <SelectedWork onOpenProject={setOpenProject} />
      <Principles />

      <Modal isOpen={!!openProject} onClose={() => setOpenProject(null)}>
        {ProjectComponent && <ProjectComponent />}
      </Modal>
    </main>
  );
}