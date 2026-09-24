import './Proyectos.css';
import Proyecto from './Proyecto'

const Proyectos = () => {
  return (
    <section className="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-lista">
        <Proyecto
          titulo="Catálogo de Películas"
          descripcion="App para buscar y gestionar películas, hecha en JS con Axios"
        />
        <Proyecto
          titulo="Buscador de Productos"
          descripcion="Buscador con fetch a una API, filtrado en tiempo real"
        />
        <Proyecto
          titulo="Gestor de Tareas"
          descripcion="Aplicación para organizar tareas diarias con prioridades"
        />
        <Proyecto
          titulo="Clima en Tiempo Real"
          descripcion="Consulta el clima actual de cualquier ciudad usando una API"
        />
      </div>
    </section>
  )
}

export default Proyectos