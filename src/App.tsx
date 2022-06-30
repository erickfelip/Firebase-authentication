import React from "react";
import "./App.css";
import { Button } from "./components/Button";

export const App = () => {
  const Teste = () => {
    console.log("CLICOU");
  };

  return (
    <div className="teste">
      <h1>Teste</h1>
      <Button text="Teste" onClick={Teste} type={null} />
    </div>
  );
};
