import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="siteHeader">
      <Link to="/" className="siteLogo">
        Yu-Ting Tseng
      </Link>

      <nav className="siteNav">
        <Link to="/#work">Work</Link>
        <Link to="/#contact">Contact</Link>
      </nav>
    </header>
  );
}