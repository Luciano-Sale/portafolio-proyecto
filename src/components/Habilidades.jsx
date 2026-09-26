import './Habilidades.css';

const Habilidades = ({ habilidades }) => {
  return (
    <section className="habilidades">
      <h2>Mis Habilidades</h2>
      <div className="habilidades-grid">
        {habilidades.map(habilidad => (
          <div className="habilidad-card" key={habilidad.nombre}>
            <i className={habilidad.icono}></i>
            <span>{habilidad.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Habilidades