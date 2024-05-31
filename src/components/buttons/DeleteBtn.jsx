import React from 'react'
import Delete from '../icons/Delete'

const DeleteBtn = ({ onDelete }) => {
  return (
    <button
    onClick={onDelete}
    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 text-center inline-flex items-center"
  >
    <Delete className="w-4 h-4 me-2"/>
    Eliminar
  </button>
  )
}

export default DeleteBtn