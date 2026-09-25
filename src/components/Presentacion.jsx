import './Presentacion.css';
import Foto from '../components/233195535.png'
const Presentacion = () => {
  return (
    <section className="presentacion">
      <h2>Luciano Sale - Estudiante de Programación</h2>
      <img src={Foto} alt="Luciano Sale" />
      <p>  Estudiante de Programación en la UTN, aprendiendo React y armando
        proyectos para entender cómo funciona todo de principio a fin.</p>
    </section>
  )
}
export default Presentacion
