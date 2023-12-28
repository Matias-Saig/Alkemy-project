import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <img
        src="../../../public/img/Error/404.webp"
        className="not-found__image"
        alt="error 404"
      />
      <Link to="/" className="not-found__link">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;
