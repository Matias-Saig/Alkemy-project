import useFetch from "../../Hooks/useFetch";
import Loading from "../../components/Loading/Loading";

function Home() {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");

  // Se agrega propiedad stock a lista de productos
  let num = 0;
  for (const elem of data) {
    num = num + 2;
    elem.stock = num;
  }

  return (
    <section className="list">
      <h2 className="list__title">Estos son nuestros productos</h2>
      {loading && <Loading type="text" />}

      {data.map((elem) => (
        <article className="card" key={elem.id}>
          <h3 className="card__title">{elem.title}</h3>
         
         <figure className="card__container">
          <img className="card__image" src={elem.image} alt={elem.title} />
          <h4 className="card__subtitle">{elem.category}</h4>
          </figure>     
          <p className="card__price">U$D {elem.price}</p>
          <button className="card__button">Detalles</button>
        </article>
      ))}
    </section>
  );
}

export default Home;
