
// src/components/menus/Menu4.js
import React from 'react';

const Menu4 = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Menú 4</h1>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-indigo-500 text-white py-2 rounded">
          Botón 4-1
        </button>
        <button className="bg-pink-500 text-white py-2 rounded">
          Botón 4-2
        </button>
      </div>
    </div>
  );
};

export default Menu4;
