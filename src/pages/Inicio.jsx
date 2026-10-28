import { Link } from 'react-router-dom';

function Inicio() {
    return (
        <main className="pagina-inicio">
            
            <section className="hero">
                <div className="hero-texto">
                    <h1>Soy Elías Gutiérrez</h1>
                    <h2>Estudiante de Ing. Civil Infor</h2>
                    <p> 
                        Este es mi portafolio, aquí podrás conocer algo de mí, mis habilidades y proyectos.
                    </p>
                    <Link to="/sobre-mi" className="btn-explorar">
                        Explorar
                    </Link>
                </div>
                
                <div className="hero-imagen">
                    <div className="placeholder-img"></div>
                </div>
            </section>
        </main>
    );
}

export default Inicio;