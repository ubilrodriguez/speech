import React from 'react';

const menuItems = [
  { id: '1', label: 'paciente' },
  { id: '2', label: 'prestaciones' },
  { id: '3', label: 'transacciones' },
  { id: '4', label: 'usuarios' }
];

const Sidebar = ({ activeMenu, onMenuSelect }) => {
  return (
    <div className="w-16 bg-gray-800 text-white flex flex-col h-full fixed left-0 top-0 pt-20">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onMenuSelect(item.id)}
          className={`py-4 text-center hover:bg-gray-700 transition-colors duration-200 
            ${activeMenu === item.id ? 'bg-blue-600' : ''}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
