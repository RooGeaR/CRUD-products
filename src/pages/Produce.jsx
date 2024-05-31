import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { createOrUpdate } from "../api/productAPI";

const Produce = () => {
  const state = useLocation().state;
  const navigate = useNavigate();
  const product = {
    id: state ? state.id : null,
    name: state?.title || "",
    description: state?.description || "",
    price: state?.price || 0,
    quantity: state?.quantity || 0
  }

  const onSubmit = async (data) => {
    const method = state ? "put" : "post";
    await createOrUpdate(data, method)
    navigate("/");
  };
  return (
    <div className="flex mt-5 gap-5">
      <div className="flex-[5_5_0%] flex flex-col gap-5">
        <ProductForm product={product} onSubmit={onSubmit} isNewRecord={!state}/>
      </div>
    </div>
  );
};

export default Produce;
