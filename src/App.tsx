import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "./components/Button";
import { Homepage } from "./components/pages/Homepage";
import { Header } from "./components/sections/Header";

export const App = () => {
  const Teste = () => {
    console.log("CLICOU");
  };

  return (
    <BrowserRouter>
      <Header />
      <Homepage />
    </BrowserRouter>
  );
};
