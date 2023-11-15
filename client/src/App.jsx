import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from "./components/school/nav";
import Home from './pages/Home';
import UsoG from './pages/UsoG';
import UsoH from "./pages/UsoH"
import UsoJ from "./pages/UsoJ"


function App() {
  return (
    <>
      <main >
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exploracion_de_'el_uso_de_la_g'_mediante_ejemplos" element={<UsoG />} />
            <Route path="/exploracion_de_'el_uso_de_la_h'_mediante_ejemplos" element={<UsoH />} />
            <Route path="/exploracion_de_'el_uso_de_la_j'_mediante_ejemplos" element={<UsoJ />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App
