import { Link } from "react-router-dom";

export default function Header() {
  const base = import.meta.env.BASE_URL;
  return (
    <header className="siteHeader">
      {/* <Link to="/" className="siteLogo">
        Yu-Ting Tseng
      </Link> */}

      <nav className="siteNav">
      <a href={`${base}#work`}>Work</a>
      <a href="#contact">Contact</a>
      </nav>
    
    </header>
  );
}