import "../App.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import Principles from "../components/Principles";
import About from "../components/About";
import Contact from "../components/Contact";

export default function App() {
    return (
        <main className="page">
            <Hero />
            <About />
            <SelectedWork />
            <Principles />
        </main>
    );
}