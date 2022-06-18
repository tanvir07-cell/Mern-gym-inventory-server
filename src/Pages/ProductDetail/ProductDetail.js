import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();

  const [product, setProducts] = useState({});
  fetch(`http://localhost:5000/products/${id}`)
    .then((res) => res.json())
    .then((data) => setProducts(data));

  const [quantity, setQuantity] = useState(product.quantity);
  console.log(quantity);
  const reduceQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mt-5 product w-50 mx-auto">
      <img src={product?.img} alt="" className="w-100 mx-auto " />
      <div className="product-description mx-5">
        <h3 className="mt-2 text-shadow-h2"> {product?.name}</h3>
        <p>
          Supplier : <span>{product?.supplier}</span>
        </p>
        {/* <p>{description}</p> */}

        <p>
          Price : <small>${product?.price}</small>
        </p>
        <p>
          Quantity : <span>{quantity}</span>
        </p>
        <button className="btn btn-primary" onClick={reduceQuantity}>
          Delivered
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
