import React from 'react';
import { Link } from "react-router-dom";
import Delete from './icons/Delete';
import Edit from './icons/Edit';
import View from './icons/View';


const truncate = (str) =>
  str?.length > 25 ? `${str.substring(0, 25)}...` : str;

const ProductList = ({ products, handleDelete }) => {

  return (
    <div className="flex flex-col ">
    <table className="min-w-full divide-y divide-gray-200 text-gray-500">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {products.map(product => (
          <tr key={product.id} className='hover:bg-gray-50'>
            <td className="px-6 py-4 whitespace-nowrap text-gray-900">{truncate(product.title)}</td>
            <td className="px-6 py-4 whitespace-nowrap">{truncate(product.description)}</td>
            <td className="px-6 py-4 whitespace-nowrap">${product.price}</td>
            <td className="px-6 py-4 whitespace-nowrap">20</td>
            <td className="px-6 py-4 whitespace-nowrap">
            <Link to={`/product/${product.id}`}>
              <button type="button" className="text-yellow-400 border border-yellow-400 hover:bg-yellow-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 mb-2">
                <View className="w-4 h-4"/>
              </button>
            </Link>
            <Link to={`/produce?edit=${product.id}`} state={product}>
              <button type="button" className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 mb-2">
                <Edit className="w-4 h-4"/>
              </button>
            </Link>
            <button type="button" onClick={() => handleDelete(product.id)} className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 mb-2">
              <Delete className="w-4 h-4"/>
            </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default ProductList;
