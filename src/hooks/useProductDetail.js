import { useEffect, useState } from "react";

const useProductDetail = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`data.json`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  return [product];
};

export default useProductDetail;
