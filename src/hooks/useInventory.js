import { useEffect, useState } from "react";

const useInventory = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return [products];
};

export default useInventory;
