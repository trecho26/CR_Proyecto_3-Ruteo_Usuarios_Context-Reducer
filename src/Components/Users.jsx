import React, { useState, useEffect, useContext } from "react";
import AppContext from "../AppContext";

const Users = () => {
  const initialValues = {
    id: "",
    nombre: "",
    correo: "",
    telefono: "",
  };
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(initialValues);
  const { setTotalUsers } = useContext(AppContext);

  const handleChange = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    // Modificar el estado
    setUser({
      ...user,
      [inputName]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    // Evitar comportamiento por defecto
    event.preventDefault();

    // Validar que todos los campos esten llenos
    if (
      user.id.trim() === "" ||
      user.nombre.trim() === "" ||
      user.correo.trim() === "" ||
      user.telefono.trim() === ""
    ) {
      return;
    }

    // Agregar usuario al estado
    setUsers([...users, user]);

    // Sumar total al contexto
    setTotalUsers(users.length + 1);

    // Transformar array a string
    const arrStr = JSON.stringify([...users, user]);

    // Guardar en localStorage
    localStorage.setItem("cr_users", arrStr);

    // Limpiar el formulario
    setUser(initialValues);
  };

  const deleteUser = (pId) => {
    // Filtrar el usuario a eliminar
    let newUsers = users.filter((pUser) => pId !== pUser.id);

    // Actualizar mi estado users
    setUsers(newUsers);

    // Transformar array a string
    const arrStr = JSON.stringify(newUsers);

    // Guardar en localStorage
    localStorage.setItem("cr_users", arrStr);
  };

  useEffect(() => {
    // Consulta a LocalStorage
    const req = localStorage.getItem("cr_users");

    // Validar que haya datos en el LocalStorage
    if (!req) {
      return;
    }

    // Transformacion de string a objeto
    const data = JSON.parse(req);

    // Asignarlo al estado
    setUsers(data);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Desde usuarios</h1>
      {/* Formulario */}
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="flex gap-3 mb-3">
          <input
            className="border-slate-300 border px-4 py-2 outline-none rounded w-full"
            placeholder="Id"
            type="text"
            name="id"
            value={user.id}
            onChange={handleChange}
          />
          <input
            className="border-slate-300 border px-4 py-2 outline-none rounded w-full"
            placeholder="Nombre"
            type="text"
            name="nombre"
            value={user.nombre}
            onChange={handleChange}
          />
          <input
            className="border-slate-300 border px-4 py-2 outline-none rounded w-full"
            placeholder="Correo"
            type="text"
            name="correo"
            value={user.correo}
            onChange={handleChange}
          />
          <input
            className="border-slate-300 border px-4 py-2 outline-none rounded w-full"
            placeholder="Telefono"
            type="text"
            name="telefono"
            value={user.telefono}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="bg-red-500 text-white rounded py-2 px-4 w-[150px] cursor-pointer hover:bg-red-700 transition-all"
            type="submit"
            value="Agregar"
          />
        </div>
      </form>
      {/* Listado de usuarios */}

      {users.length === 0 && (
        <h3 className="text-center font-bold text-xl">No tienes usuarios</h3>
      )}

      <div className="">
        {users.map((pUser) => (
          <div key={pUser.id} className="shadow-md rounded p-4">
            <p>ID: {pUser.id}</p>
            <p>Nombre:{pUser.nombre}</p>
            <p>Correo:{pUser.correo}</p>
            <p>Telefono:{pUser.telefono}</p>
            <button
              onClick={() => deleteUser(pUser.id)}
              className="bg-red-300 font-bold px-4 py-1"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
