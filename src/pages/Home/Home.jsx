import { useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";
import useFetchFilter from "../../Hooks/useFetchFilter";
import ProductsList from "../../components/Products/ProductsList";

function Home() {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");

  const { categoryId } = useParams();

  // Se agrega propiedad stock a lista de productos
  let num = 0;
  for (const elem of data) {
    num = num + 2;
    elem.stock = num;
  }

  // filtrado de productos con custom Hook
  const { itemsFilter } = useFetchFilter({ id: categoryId, data: data });

  return (
    <>
      {itemsFilter ? (
        <ProductsList loading={loading} data={data} title={categoryId} />
          ) : (
            <ProductsList loading={loading} data={data} title="Estos son nuestros productos" />
      )}
    </>
  );
}

export default Home;
