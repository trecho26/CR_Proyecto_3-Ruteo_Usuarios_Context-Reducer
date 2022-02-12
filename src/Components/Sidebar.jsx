import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../AppContext";

const Sidebar = () => {
  const { counter } = useContext(AppContext);
  return (
    <div className="bg-red-500 p-4 w-[250px]">
      <ul>
        <NavLink to="/users">
          <li className="p-2 rounded text-white hover:bg-red-700 transition-all mb-2">
            Usuarios
          </li>
        </NavLink>
        <NavLink to="/contador">
          <li className="p-2 rounded text-white hover:bg-red-700 transition-all">
            Contador
          </li>
        </NavLink>
        <li className="p-2 rounded text-white hover:bg-red-700 transition-all">
          Contador: {counter}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
