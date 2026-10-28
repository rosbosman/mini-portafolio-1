function Footer() {
    const anioActual = new Date().getFullYear();

    return (
        <footer>
            <p>
                © {anioActual} Elías Gutiérrez Pino. Todos los derechos reservados.
            </p>
        </footer>
    );
}

export default Footer;