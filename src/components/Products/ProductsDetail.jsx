import { useParams } from "react-router";
import { stock } from "../../utils/stock";
import Loading from "../Loading/Loading";
import useFetch from "../../Hooks/useFetch";
import useFind from "../../Hooks/useFind";
import ProductsDetailsItem from "./ProductsDetailsItem";

function ProductsDetail() {
  // Consumo de API
  const { data } = useFetch("https://fakestoreapi.com/products");
  // Se agrega propiedad stock a lista de productos
  stock(data);

  // Acceso a parámetros de url
  const { itemId } = useParams();

  // Filtrado de productos con custom Hook

  const { itemFind } = useFind({ id: itemId, data: data });

  const itemFound = itemFind && [Object.values(itemFind)];

  return (
    <>
      {itemFound ? (
        <ProductsDetailsItem product={itemFound} />
      ) : (
        <Loading type="text" />
      )}
    </>
  );
}

export default ProductsDetail;
