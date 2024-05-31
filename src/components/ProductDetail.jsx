import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import DeleteBtn from './buttons/DeleteBtn';
import UpdateBtn from './buttons/UpdateBtn';
import { remove } from '../api/productAPI';

const ProductDetail = ({ product }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await remove(id);
    navigate("/")
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-6">{product?.title}</h2>
      <p className="text-gray-700 mb-6">{product?.description}</p>
      <p className="text-gray-700 mb-6">Precio: ${product?.price}</p>
      <p className="text-gray-700 mb-10">Cantidad: 20</p>
      <div className="flex justify-between">
        <Link to={`/produce?edit=${product?.id}`} state={product}>
          <UpdateBtn />
        </Link>
        <DeleteBtn onDelete={() => handleDelete(product.id)}/>
      </div>
    </div>
  );
};

export default ProductDetail;