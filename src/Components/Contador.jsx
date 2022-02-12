import React, { useContext } from "react";
import AppContext from "../AppContext";

const Contador = () => {
  const { counter, increment, decrement } = useContext(AppContext);
  return (
    <>
      <button onClick={() => increment()}>+</button>
      <p>Contador: {counter}</p>
      <button onClick={() => decrement()}>-</button>
    </>
  );
};

export default Contador;
