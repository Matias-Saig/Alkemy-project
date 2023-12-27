import Loading from "../Loading/Loading";


function FilterProducts({loading, items}) {
  return (
    
      <section className="list">
        <h2 className="list__title">Categoria ...</h2>
        {loading && <Loading type="text" />}

        {items.map((elem) => (
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

export default FilterProducts;
