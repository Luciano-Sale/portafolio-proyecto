import Header from './components/Header'
import Presentacion from './components/Presentacion'
import Habilidades from './components/Habilidades'
import Proyectos from './components/Proyectos'
import Footer from './components/Footer'
import { SobreMi } from './components/SobreMi'
import { useState } from "react"
import Contacto from './components/Contacto'

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
    <>
      <Header />
      <Presentacion />
      <Habilidades habilidades={habilidades} />
      <Proyectos />
      <SobreMi />
      <Footer />
      <Contacto/>
      
    </>
  )

}

export default App
