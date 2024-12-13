// src/components/menus/Menu1.js
import React from 'react';

const Menu1 = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Menú 1</h1>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-blue-500 text-white py-2 rounded">
          Botón 1-1
        </button>
        <button className="bg-green-500 text-white py-2 rounded">
          Botón 1-2
        </button>
      </div>
    </div>
  );
};

export default Menu1;
