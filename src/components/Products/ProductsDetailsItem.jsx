import { useState } from "react";
import { Link } from "react-router-dom";

function ProductsDetailsItem({ product }) {
  const [numberDisplay, setNumberDisplay] = useState(0);

  const operSum = (e) => {
    numberDisplay < e ? setNumberDisplay(numberDisplay + 1) : null;
  };

  const operRes = () => {
    numberDisplay >= 1 ? setNumberDisplay(numberDisplay - 1) : null;
  };

  const operBuy = () => {};

  return (
    <section className="list">
      {product.map((elem) => (
        <article className="product" key={elem[0]}>
          <h3 className="product__subtitle">{elem[4]}</h3>
          <h2 className="product__title">{elem[1]}</h2>

          <figure className="container">
            <img className="container__image" src={elem[5]} alt={elem[1]} />
            <p className="container__description">
              {elem[3]}
              <span className="span__price">U$D {elem[2]}</span>
            </p>
          </figure>

          <div className="product__buy">
            <button className="buy__btn button--res" onClick={operRes}>
              -
            </button>
            <p className="display">{numberDisplay}</p>
            <button
              className="buy__btn button--sum"
              onClick={() => operSum(elem[7])}
            >
              +
            </button>
          </div>
          <Link className="product__link">Comprar</Link>
          <p className="product__stock">Stock {elem[7]}</p>
        </article>
      ))}
    </section>
  );
}

export default ProductsDetailsItem;

/*  */
