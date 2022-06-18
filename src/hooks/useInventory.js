import { useEffect, useState } from "react";

const useInventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return [products];
};

export default useInventory;
