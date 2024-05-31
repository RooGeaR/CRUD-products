import React from 'react';
import CreateBtn from './buttons/CreateBtn';
import UpdateBtn from './buttons/UpdateBtn';
import useInput from '../hooks/useInput';

const ProductForm = ({ product, onSubmit, isNewRecord }) => {
  const [name, bindName] = useInput(product?.name || "");
  const [description, bindDescription] = useInput(product?.description || "");
  const [price, bindPrice] = useInput(product?.price || '');
  const [quantity, bindQuantity] = useInput(product?.quantity || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name || !description || !price) {
      alert('Por favor llena todos los campos');
      return;
    }
    const numericPrice = parseFloat(price);
    const numericQuantity = parseInt(quantity);

    onSubmit({ name, description, price: numericPrice, quantity: numericQuantity, id: product.id });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">Nombre</label>
        <input
          type="text"
          id="name"
          {...bindName}
          maxLength={100}
          className="appearance-none bg-gray-50 border border-gray-300 text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-bold text-gray-900 mb-2">Descripción</label>
        <textarea
          id="description"
          {...bindDescription}
          maxLength={200}
          rows={4}
          className="appearance-none bg-gray-50 border border-gray-300 text-sm rounded w-full py-2 px-3 text-gray-900 leading-tight focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-bold text-gray-900 mb-2">Precio ($)</label>
        <input
          type="number"
          id="price"
          {...bindPrice}
          className="appearance-none bg-gray-50 border border-gray-300 text-sm rounded w-full py-2 px-3 text-gray-900 leading-tight focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="quantity" className="block text-sm font-bold text-gray-900 mb-2">Cantidad</label>
        <input
          type="number"
          id="quantity"
          {...bindQuantity}
          className="appearance-none bg-gray-50 border border-gray-300 text-sm rounded w-full py-2 px-3 text-gray-900 leading-tight focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex justify-end">
      { isNewRecord ? <CreateBtn /> : <UpdateBtn />}
      </div>
    </form>
  );
};

export default ProductForm;