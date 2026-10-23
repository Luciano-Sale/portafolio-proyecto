import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Presentacion from './components/pages/Presentacion'
import Habilidades from './components/Habilidades'
import Proyectos from './components/pages/Proyectos'
import Footer from './components/Footer'
import { SobreMi } from './components/pages/SobreMi'
import { useState } from "react"
import Contacto from './components/pages/Contacto'
import SideBar from './components/SideBar'


function App() {

  const [habilidades, setHabilidades] = useState([
    { nombre: "JavaScript", icono: "fa-brands fa-js" },
    { nombre: "Git", icono: "fa-brands fa-git-alt" },
    { nombre: "C#", icono: "fa-solid fa-code" },
    { nombre: "React", icono: "fa-brands fa-react" },
    { nombre: "TypeScript", icono: "fa-solid fa-code" },
    { nombre: "Python", icono: "fa-brands fa-python" },
  ]);

  return (
    <BrowserRouter>
      <SideBar />
      <Routes>

        <Route path="/" element={<Presentacion />} />
        <Route path="/about" element={<SobreMi />} />
        <Route path="/skills" element={<Habilidades habilidades={habilidades} />} />
        <Route path="/projects" element={<Proyectos />} />
        <Route path="/contact" element={<Contacto />} />
    
      </Routes>
      <Header />
      <Footer />
    </BrowserRouter>

  )

}

export default App
