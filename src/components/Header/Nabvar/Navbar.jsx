import useFetch from "../../../Hooks/useFetch";
import NavbarItem from "./NavbarItem";

function Navbar() {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  return (
    <nav className="navbar">
      {loading && <p>Cargando...</p>}

      {error && <p>Error: {error.message}</p>}
      
      <ul className="navbar__list">
        <NavbarItem href="/" content="Inicio" />
        {data.map((elem) => (
          
            <NavbarItem key={elem} href={elem} content={elem} />
          
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
