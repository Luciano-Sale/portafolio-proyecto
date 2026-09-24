const Habilidades = () => {
    const habilidades = ["JavaScript", "Git", "C#", "React", "TypeScript", "Python"];

    return (
        <>
            <ul>
                {habilidades.map(habilidad => (
                    <li key={habilidad}>{habilidad}</li>
                ))}
            </ul>
        </>
    )
}

export default Habilidades
