import React from "react";
import Plus from "../icons/Plus";

const CreateBtn = () => {
  return (
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center inline-flex items-center"
    >
      <Plus className="w-6 h-6 me-2" />
      Crear Producto
    </button>
  );
};

export default CreateBtn;
