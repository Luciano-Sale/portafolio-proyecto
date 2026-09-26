import './Presentacion.css';
import fotoLuciano from './233195535.png';

const Presentacion = () => {
  return (
    <section className="presentacion">
      <div className="presentacion-texto">
        <h2>Hola, soy Luciano.<br/>Estudiante de Programación</h2>
        <p>
          Aprendiendo React y armando proyectos para entender cómo funciona
          todo de principio a fin.
        </p>
      </div>
      <img src={fotoLuciano} alt="Luciano Sale" className="presentacion-img" />
    </section>
  )
}

export default Presentacion