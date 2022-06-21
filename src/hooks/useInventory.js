import { useEffect, useState } from "react";

const useInventory = () => {
  const [products, setProducts] = useState([]);
  const limit = 6;

  useEffect(() => {
    fetch(`https://secret-dawn-73954.herokuapp.com/products?limit=6`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts, limit];
};

export default useInventory;
