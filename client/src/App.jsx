import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from "./components/school/nav";
import Home from './pages/Home';
import Autores from './pages/Autores';
import UsoLetras from "./pages/UsoLetras"
import Texto from "./pages/Texto"
import Bibliografia from "./pages/Bibliografias"


function App() {
  return (
    <>
      <main >
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/el_texto_ortografico" element={<Texto />} />
            <Route path="/autores" element={<Autores />} />
            <Route path="/exploracion_de_'el_uso_de_las_letras'_mediante_ejemplos" element={<UsoLetras />} />
            <Route path="/bibliografias" element={<Bibliografia />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App
