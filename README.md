Portafolio Personal — Luciano Sale

Portafolio personal de una sola página (SPA), desarrollado con React y Vite como Trabajo Práctico N°1 de la materia Programación IV — UTN Facultad Regional Tucumán.

Tecnologías utilizadas

- React
- Vite
- CSS (estilos propios, con variables de tema oscuro)
- Font Awesome (íconos, vía CDN)

Descripción

El portafolio muestra información personal, habilidades técnicas, proyectos realizados durante la cursada y una vía de contacto, organizados en componentes reutilizables. Incluye interacción mediante estado (`useState`) para mostrar y ocultar contenido dinámicamente, y renderiza listas de datos (habilidades) a partir de un array manejado con estado en el componente padre y pasado por props.

Estructura de componentes

- **Header** — barra superior fija con el nombre.
- **Presentación** — sección de bienvenida, con foto de perfil.
- **Sobre mí** — descripción personal, con botón "Ver más / Ver menos" (useState + renderizado condicional).
- **Habilidades** — cards con ícono y nombre de cada tecnología; los datos se manejan con `useState` en `App` y se pasan a `Habilidades` por props, que los renderiza con `map()`.
- **Proyectos** — cards de proyectos, reutilizando un componente `Proyecto` mediante props (título, descripción, ícono).
- **Contacto** — vía de contacto (mail).
- **Footer** — información de cierre.

Cómo correr el proyecto localmente

1. Cloná el repositorio:
```bash
   git clone https://github.com/Luciano-Sale/tp1-react-portfolio-sale-luciano.git
```

2. Entrá a la carpeta del proyecto:
```bash
   cd tp1-react-portfolio-sale-luciano
```

3. Instalá las dependencias:
```bash
   npm install
```

4. Levantá el servidor de desarrollo:
```bash
   npm run dev
```

5. Abrí `http://localhost:5173/` en el navegador.

Autor

Luciano Sale — Estudiante de Programación, UTN Facultad Regional Tucumán.