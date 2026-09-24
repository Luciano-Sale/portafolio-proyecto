import './SobreMi.css';
import { useState } from "react"

export const SobreMi = () => {
  const [mostrarMas, setMostrarMas] = useState(false);
  let textoBoton;

  if (mostrarMas) {
    textoBoton = "Ver menos"
  } else {
    textoBoton = "Ver más"
  }

  return (
    <section className="sobre-mi">
      <h2>Sobre mí</h2>

      <button onClick={() => setMostrarMas(!mostrarMas)}>{textoBoton}</button>

      {mostrarMas && (
        <p>
            Soy estudiante de Programación en la UTN, apasionado por construir
        cosas que funcionan de verdad, desde interfaces prolijas hasta la
        lógica que las hace andar por detrás.
          Me metí en programación por curiosidad y me terminó atrapando la
          parte de resolver problemas paso a paso. Actualmente estoy
          aprendiendo React y afianzando JavaScript, con ganas de seguir
          creciendo hacia el desarrollo frontend. Fuera de la facultad, manejo
          también un proyecto propio de indumentaria, así que además de
          código, me interesa todo lo relacionado a llevar una idea adelante
          de punta a punta.
        </p>
      )}
    </section>
  )
}