import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from "./components/school/nav";
import Home from './pages/Home';
import Teorico from './pages/Teorico';
import Curriculo from "./pages/Curriculo"


function App() {
  return (
    <>
      <main >
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exploracion_teorica_de_'el_texto_teorico'_mediante_analisis" element={<Teorico />} />
            <Route path="/curriculo,_organizacion_y_perfil_docente" element={<Curriculo />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App
