import { Link } from "react-router-dom";


function NavbarItem({href, content}) {



  return (
    <Link to={href} className={`list__item`}>
      {content}
    </Link>
  );
}

export default NavbarItem;
