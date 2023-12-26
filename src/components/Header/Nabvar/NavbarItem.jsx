import { Link } from "react-router-dom";

function NavbarItem({href, content}) {
  return (
    <Link to={href} className="navbar__list__item__link">
      {content}
    </Link>
  );
}

export default NavbarItem;
