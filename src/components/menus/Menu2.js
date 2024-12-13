
// src/components/menus/Menu2.js
import React from 'react';

const Menu2 = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Menú 2</h1>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-purple-500 text-white py-2 rounded">
          Botón 2-1
        </button>
        <button className="bg-orange-500 text-white py-2 rounded">
          Botón 2-2
        </button>
      </div>
    </div>
  );
};

export default Menu2;
