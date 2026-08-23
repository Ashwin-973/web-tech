import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

function NavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);
  const hasDropdown = Boolean(item.dropdown && item.dropdown.length);

  const closeDropdown = () => setIsOpen(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close this dropdown if the user clicks outside of it.
  useEffect(() => {
    function handleOutsideClick(event) {
      if (itemRef.current && !itemRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <li
      className="nav-item"
      ref={itemRef}
      onMouseEnter={() => hasDropdown && setIsOpen(true)}
      onMouseLeave={() => hasDropdown && setIsOpen(false)}
    >
      <div className="nav-link-wrapper">
        <NavLink
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={hasDropdown ? undefined : closeDropdown}
        >
          {item.label}
        </NavLink>

        {hasDropdown && (
          <button
            type="button"
            className="dropdown-toggle"
            aria-haspopup="true"
            aria-expanded={isOpen}
            aria-label={`Toggle ${item.label} submenu`}
            onClick={toggleDropdown}
          >
            <span className={`caret ${isOpen ? "caret-up" : ""}`}>&#9662;</span>
          </button>
        )}
      </div>

      {hasDropdown && isOpen && (
        <DropdownMenu items={item.dropdown} onItemClick={closeDropdown} />
      )}
    </li>
  );
}

export default NavItem;