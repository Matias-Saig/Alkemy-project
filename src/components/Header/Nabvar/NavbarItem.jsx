import { Link, useLocation } from "react-router-dom";


function NavbarItem({href, content}) {

  const local = useLocation().pathname;

  return (
    <Link to={href} className={`list__item ${local === href && "list__item--active" }`}>
      {content}
    </Link>
  );
}

export default NavbarItem;
