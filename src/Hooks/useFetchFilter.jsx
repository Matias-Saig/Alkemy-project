import { useEffect, useState } from "react";
//import { useParams } from "react-router";
import useFetch from "./useFetch";

function useFetchFilter({ urlFilter, ref }) {
  const [items, setItems] = useState([]);


  const { data } = useFetch(urlFilter);

  useEffect(() => {
    const list = ref
      ? data.filter((prod) => prod.category === ref)
      : console.log("error de carga en filtrado");

    setItems(list);
  }, [ref, data]);

  return { items };
}

export default useFetchFilter;
