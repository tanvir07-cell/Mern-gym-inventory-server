import { useEffect, useState } from "react";

const UseProductDetail = (id) => {
  const [product, setProducts] = useState({});
  // console.log(product);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  }, [product, id]);
  return [product];
};
export default UseProductDetail;
