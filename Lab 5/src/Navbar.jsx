import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar({ menu, collegeName }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
          <span className="brand-mark">U</span>
          <span className="brand-name">{collegeName}</span>
        </Link>

        <button
          type="button"
          className="hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={toggleMobileMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-list-wrapper ${mobileOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {menu.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;