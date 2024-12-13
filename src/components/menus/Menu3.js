
// src/components/menus/Menu3.js
import React from 'react';

const Menu3 = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Menú 3</h1>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-red-500 text-white py-2 rounded">
          Botón 3-1
        </button>
        <button className="bg-yellow-500 text-white py-2 rounded">
          Botón 3-2
        </button>
      </div>
    </div>
  );
};

export default Menu3;
