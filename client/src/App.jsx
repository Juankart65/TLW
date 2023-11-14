import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from "./components/school/nav";
import Home from './pages/Home';
import Teorico from './pages/Teorico';
import Literario from "./pages/Literario"


function App() {
  return (
    <>
      <main >
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exploracion_teorica_de_'el_texto_teorico'_mediante_analisis" element={<Teorico />} />
            <Route path="/la_danza_de_las_palabras:_historia_y_estilo_del_texto_literario" element={<Literario />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App
