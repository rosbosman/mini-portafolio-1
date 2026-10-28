
function TarjetaProyecto({ titulo, descripcion, enlace }) {
    return (
        <article className="tarjeta-proyecto">
            <h2>{titulo}</h2>

            <p>{descripcion}</p>

            {enlace ? (
                <a
                    href={enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver proyecto
                </a>
            ) : (
                <p>Repositorio no disponible.</p>
            )}
        </article>
    );
}

export default TarjetaProyecto;
