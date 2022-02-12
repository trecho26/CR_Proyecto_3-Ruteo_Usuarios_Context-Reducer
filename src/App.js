import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Users from "./Components/Users";
import AppContext from "./AppContext";
import { useState, useReducer } from "react";
import Contador from "./Components/Contador";
import { appReducer } from "./AppReducer";
import { DECREMENTAR, INCREMENTAR } from "./types";

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    users: [
      { nombre: "hector" },
      { nombre: "hector" },
      { nombre: "hector" },
      { nombre: "hector" },
      { nombre: "hector" },
      { nombre: "hector" },
      { nombre: "hector" },
      { nombre: "hector" },
      { nombre: "hector" },
    ],
    productos: [
      { nombre: "refresco" },
      { nombre: "refresco" },
      { nombre: "refresco" },
      { nombre: "refresco" },
      { nombre: "refresco" },
      { nombre: "refresco" },
      { nombre: "refresco" },
      { nombre: "refresco" },
      { nombre: "refresco" },
      { nombre: "refresco" },
      { sabor: ["Cola", "Naranja", "Uva"] },
    ],
    counter: 0,
  });

  const increment = () => {
    console.log("increment");
    dispatch({
      type: INCREMENTAR,
    });
  };

  const decrement = () => {
    console.log("decrement");
    dispatch({
      type: DECREMENTAR,
    });
  };

  return (
    <AppContext.Provider
      value={{
        counter: state.counter,
        productos: state.productos,
        users: state.users,
        increment,
        decrement,
      }}
    >
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/contador" element={<Contador />} />
            <Route
              exact
              path="/products/:id"
              element={<h1>Desde producto especifico</h1>}
            />
          </Routes>
        </Layout>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
