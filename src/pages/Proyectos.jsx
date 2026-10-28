import TarjetaProyecto from '../components/TarjetaProyecto.jsx';

function Proyectos() {
    const proyectos = [
        {
            id: 1,
            titulo: 'EID 1 - Cálculo básico',
            descripcion:
                'Proyecto enfocado en  crear un juego de naves utilizando calculos matematicos.',
            enlace: 'https://github.com/rosbosman/EID_1_calculo_basico',
        },
        {
            id: 2,
            titulo: 'una api',
            descripcion:
                '   es un proyecto que es estamos trabajando un equipo de 4 en el cual tenmos que filtrar datos de las entidades studiante y entidaes pet  .',
            enlace: 'https://github.com/benjamin-leal/taller_2_backend',
        },
        
    ];

    return (
        <main>
            <h1>Mis proyectos</h1>

            <p>
                Estos son algunos de mis trabajos académicos y proyectos
                de programación.
            </p>

            <section className="lista-proyectos">
                {proyectos.map((proyecto) => (
                    <TarjetaProyecto
                        key={proyecto.id}
                        titulo={proyecto.titulo}
                        descripcion={proyecto.descripcion}
                        enlace={proyecto.enlace}
                    />
                ))}
            </section>
        </main>
    );
}

export default Proyectos;