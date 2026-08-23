import { NavLink } from "react-router-dom";

function DropdownMenu({ items, onItemClick }) {
  if (!items || items.length === 0) return null;

  return (
    <ul className="dropdown-menu" role="menu">
      {items.map((item) => (
        <li key={item.path} role="none">
          <NavLink
            to={item.path}
            role="menuitem"
            className={({ isActive }) =>
              isActive ? "dropdown-link active" : "dropdown-link"
            }
            onClick={onItemClick}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;