import React from "react";
import { useParams } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import useProductDetail from "../../hooks/useInventory";

const ServiceDetail = () => {
  const { id } = useParams();
  // use custom hook:
  const [product] = useProductDetail();
  return (
    <div>
      <h1 className="mt-5">This is the product detail:{id}</h1>
      <h5>{product?.name}</h5>
    </div>
  );
};

export default ServiceDetail;
