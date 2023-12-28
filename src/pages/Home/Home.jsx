import { useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";
import useFilter from "../../Hooks/useFilter";
import ProductsList from "../../components/Products/ProductsList";
import { stock } from "../../utils/stock";

function Home() {
  
  // Consumo de API
  const { data, loading } = useFetch("https://fakestoreapi.com/products");

  // Acceso a parámetros de url
  const { categoryId } = useParams();

  // Se agrega propiedad stock a lista de productos
  stock(data)
  
  // Filtrado de productos con custom Hook
  const { itemsFilter } = useFilter({ id: categoryId, data: data });
  
  // Retorno de condicional de lista completa o filtrada 
  return (
    <>
      {itemsFilter ? (
        <ProductsList loading={loading} data={itemsFilter} title={categoryId} />
          ) : (
            <ProductsList loading={loading} data={data} title="Estos son nuestros productos" />
      )}
    </>
  );
}

export default Home;
