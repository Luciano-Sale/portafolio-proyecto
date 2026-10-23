
import { NavLink } from "react-router-dom";
import "./styles/SideBar.css";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Portfolio<span>.</span></h2>
        <p>Desarrollador en formación</p>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" end>
          <span>01</span>
          Inicio
        </NavLink>

        <NavLink to="/about">
          <span>02</span>
          Sobre mí
        </NavLink>

        <NavLink to="/Skills">
          <span>03</span>
          Habilidades
        </NavLink>

        <NavLink to="/Projects">
          <span>04</span>
          Proyectos
        </NavLink>

        <NavLink to="/Contact">
          <span>05</span>
          Contacto
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <p>© 2026</p>
        <p>Hecho con React</p>
      </div>
    </aside>
  );
};

export default SideBar;
