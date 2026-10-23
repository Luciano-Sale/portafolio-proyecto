
import { useState } from "react";
import "../styles/SobreMi.css";

export const SobreMi = () => {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section className="sobre-mi">
      <h1>Sobre mí</h1>

      <p>
        Soy estudiante de Programación en la UTN, apasionado por construir
        cosas que funcionan de verdad, desde interfaces prolijas hasta la
        lógica que las hace andar por detrás.
      </p>

      <p>
        Me interesa resolver problemas paso a paso y seguir creciendo
        como desarrollador. Actualmente estoy aprendiendo React y
        afianzando mis conocimientos de JavaScript.
      </p>

      {mostrarMas && (
        <div className="sobre-mi-extra">
          <p>
            Fuera de la facultad, también llevo adelante un proyecto
            propio de indumentaria. Esto me permite aprender sobre
            creatividad, organización y cómo convertir una idea en algo real.
          </p>

          <p>
            Mi objetivo es seguir formándome y conseguir mi primera
            oportunidad laboral en el mundo del desarrollo de software.
          </p>
        </div>
      )}

      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? "Ver menos" : "Ver más"}
      </button>
    </section>
  );
};
