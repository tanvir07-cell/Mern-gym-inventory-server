import { useEffect, useState } from "react";

const UseProductDetail = (id) => {
  const [product, setProduct] = useState({});
  // console.log(product);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // console.log(data);
      });
  }, [product, id]);
  return [product, setProduct];
};
export default UseProductDetail;
