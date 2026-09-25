import './Habilidades.css';


const Habilidades = ({ habilidades }) => {

  return (
    <section className="habilidades">
      <h2>Habilidades</h2>
      <ul>
        {habilidades.map(habilidad => (
          <li key={habilidad.nombre}>
            <i className={habilidad.icono}></i>
            <span>{habilidad.nombre}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Habilidades