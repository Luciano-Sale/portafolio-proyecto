import './Proyecto.css';

const Proyecto = ({ titulo, descripcion }) => {
  return (
    <div className="proyecto">
      <div className="proyecto-icono">💻</div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  )
}

export default Proyecto