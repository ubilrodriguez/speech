import React from 'react';
import Menu1 from './menus/Menu1';
import Menu2 from './menus/Menu2';
import Menu3 from './menus/Menu3';
import Menu4 from './menus/Menu4';

const Layout = ({ activeMenu }) => {
  const renderContent = () => {
    switch(activeMenu) {
      case '1':
        return <Menu1 />;
      case '2':
        return <Menu2 />;
      case '3':
        return <Menu3 />;
      case '4':
        return <Menu4 />;
      default:
        return (
          <div className="flex items-center justify-center h-full text-gray-500">
            Selecciona un menú
          </div>
        );
    }
  };

  return (
    <div className="ml-16 w-[calc(100%-4rem)] h-full overflow-y-auto">
      <div className="p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Layout;
