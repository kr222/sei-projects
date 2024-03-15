import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Recipes from "./pages/Recipes";
import Planner from "./pages/Planner";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/planner" />} />
        <Route path="planner" element={<Planner />} />
        <Route path="recipes" element={<Recipes />} />
      </Routes>
    </>
  );
}

export default App;
