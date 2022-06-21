import { useEffect, useState } from "react";

const UseProductDetail = (id) => {
  const [product, setProduct] = useState({});
  // console.log(product);

  useEffect(() => {
    fetch(`https://secret-dawn-73954.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // console.log(data);
      });
  }, [product, id]);
  return [product, setProduct];
};
export default UseProductDetail;
