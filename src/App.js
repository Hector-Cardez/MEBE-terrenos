import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import Empresa from "./components/Empresa";
import Desarrollos from "./components/Desarrollos";
import Contacto from "./components/Contacto";
import Novedades from "./components/Novedades";
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/desarrollos" element={<Desarrollos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/novedades" element={<Novedades />} />
      </Routes>
    </Router>
  );
};

export default App;
