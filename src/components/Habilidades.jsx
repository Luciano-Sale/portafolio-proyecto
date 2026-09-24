import './Habilidades.css';

const Habilidades = () => {
  const habilidades = ["JavaScript", "Git", "C#", "React", "TypeScript", "Python"];

  return (
    <section className="habilidades">
      <h2>Habilidades</h2>
      <ul>
        {habilidades.map(habilidad => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>
    </section>
  )
}

export default Habilidades