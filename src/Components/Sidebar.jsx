import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-red-500 p-4 w-[250px]">
      <ul>
        <NavLink to="/users">
          <li className="p-2 rounded text-white hover:bg-red-700 transition-all mb-2">
            Usuarios
          </li>
        </NavLink>
        <NavLink to="/products">
          <li className="p-2 rounded text-white hover:bg-red-700 transition-all">
            Productos
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
