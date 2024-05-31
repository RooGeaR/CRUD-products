import React from "react";
import Edit from "../icons/Edit";

const UpdateBtn = () => {
  return (
    <button
      type="submit"
      className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center inline-flex items-center"
    >
      <Edit className="w-4 h-4 me-2" />
      Actualizar
    </button>
  );
};

export default UpdateBtn;
