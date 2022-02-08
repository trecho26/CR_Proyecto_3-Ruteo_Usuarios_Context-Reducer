import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      nombre: "Hector",
      correo: "hector@gmail.com",
      telefono: "6677852496",
    },
    {
      id: 1,
      nombre: "Hector",
      correo: "hector@gmail.com",
      telefono: "6677852496",
    },
    {
      id: 1,
      nombre: "Hector",
      correo: "hector@gmail.com",
      telefono: "6677852496",
    },
    {
      id: 1,
      nombre: "Hector",
      correo: "hector@gmail.com",
      telefono: "6677852496",
    },
    {
      id: 1,
      nombre: "Hector",
      correo: "hector@gmail.com",
      telefono: "6677852496",
    },
  ]);
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Desde usuarios</h1>
      {/* Formulario */}
      <form className="mb-3">
        <div className="flex gap-3 mb-3">
          <input
            className="border-slate-300 border px-4 py-2 outline-none rounded w-full"
            placeholder="Id"
            type="text"
            name="id"
          />
          <input
            className="border-slate-300 border px-4 py-2 outline-none rounded w-full"
            placeholder="Nombre"
            type="text"
            name="nombre"
          />
          <input
            className="border-slate-300 border px-4 py-2 outline-none rounded w-full"
            placeholder="Correo"
            type="text"
            name="correo"
          />
          <input
            className="border-slate-300 border px-4 py-2 outline-none rounded w-full"
            placeholder="Telefono"
            type="text"
            name="telefono"
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

      <div className="grid gap-3 sm:grid-cols-12 md:grid-cols-6 lg:grid-cols-4">
        {users.map((user) => (
          <div className="shadow-md rounded p-4">
            <p>ID:</p>
            <p>Nombre:</p>
            <p>Correo:</p>
            <p>Telefono:</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
