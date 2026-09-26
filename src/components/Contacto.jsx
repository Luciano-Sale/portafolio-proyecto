import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <p>¿Querés hablar sobre algún proyecto?</p>

      <div className="contacto-links">
        <a href="mailto:luchosale96@gmail.com" className="contacto-link">
          <i className="fa-solid fa-envelope"></i>
          <span>luchosale96@gmail.com</span>
        </a>
      </div>
    </section>
  )
}

export default Contacto