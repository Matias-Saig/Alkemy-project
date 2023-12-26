import useFetch from "../../../Hooks/useFetch";
import Loading from "../../Loading/Loading";
import NavbarItem from "./NavbarItem";

function Navbar() {
  const { data, loading } = useFetch(
    "https://fakestoreapi.com/products/categories"
  )

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {loading ? (
          <Loading type="dots" />
        ) : (
          <NavbarItem href="/" content="Inicio" />
        )}

        {data.map((elem) => (
          <NavbarItem key={elem} href={elem} content={elem} />
        ))}

        
      </ul>
    </nav>
  );
}

export default Navbar;
