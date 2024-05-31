import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { getOne } from "../api/productAPI";

const Single = () => {
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  useEffect(() => {
    getOne(productId).then((data) => setProduct(data))
  }, [productId]);

  return (
    <div className="flex flex-col gap-12 mt-10">
      <ProductDetail product={product}/>
    </div>
  );
};

export default Single;
