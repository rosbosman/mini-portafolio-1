import { useState } from 'react';

function FormularioContacto() {
    // Estado de los campos del formulario
    const [valores, setValores] = useState({
        nombre: '',
        correo: '',
        mensaje: '',
    });

    // Estado de los errores de validación
    const [errores, setErrores] = useState({});

    // Estado para confirmar el envío
    const [enviado, setEnviado] = useState(false);

    // Actualiza el campo que el usuario está escribiendo
    function onChange(event) {
        const { name, value } = event.target;

        setValores((valoresAnteriores) => ({
            ...valoresAnteriores,
            [name]: value,
        }));

        // Si el usuario modifica el formulario, oculta la confirmación anterior
        setEnviado(false);
    }

    // Comprueba los datos antes de enviar
    function onSubmit(event) {
        event.preventDefault();

        const nuevosErrores = {};

        // Validar nombre
        if (!valores.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }

        // Validar correo
        const correo = valores.correo.trim();
        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!correo) {
            nuevosErrores.correo = 'El correo es obligatorio.';
        } else if (!formatoCorreo.test(correo)) {
            nuevosErrores.correo = 'Introduce un correo válido.';
        }

        // Validar mensaje
        if (!valores.mensaje.trim()) {
            nuevosErrores.mensaje = 'El mensaje es obligatorio.';
        }

        // Guardar errores y detener el envío si existen
        setErrores(nuevosErrores);

        if (Object.keys(nuevosErrores).length > 0) {
            setEnviado(false);
            return;
        }

        // Si los datos son válidos, confirmar y limpiar los campos
        setEnviado(true);

        setValores({
            nombre: '',
            correo: '',
            mensaje: '',
        });

        setErrores({});
    }

    return (
        <section>
            <h2>Envíame un mensaje</h2>

            <form onSubmit={onSubmit} noValidate>
                <div>
                    <label htmlFor="nombre">Nombre:</label>

                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={valores.nombre}
                        onChange={onChange}
                        aria-invalid={Boolean(errores.nombre)}
                        aria-describedby={errores.nombre ? 'error-nombre' : undefined}
                    />

                    {errores.nombre && (
                        <p id="error-nombre" role="alert">
                            {errores.nombre}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="correo">Correo electrónico:</label>

                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={valores.correo}
                        onChange={onChange}
                        aria-invalid={Boolean(errores.correo)}
                        aria-describedby={errores.correo ? 'error-correo' : undefined}
                    />

                    {errores.correo && (
                        <p id="error-correo" role="alert">
                            {errores.correo}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="mensaje">Mensaje:</label>

                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={valores.mensaje}
                        onChange={onChange}
                        rows="5"
                        aria-invalid={Boolean(errores.mensaje)}
                        aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
                    />

                    {errores.mensaje && (
                        <p id="error-mensaje" role="alert">
                            {errores.mensaje}
                        </p>
                    )}
                </div>

                <button type="submit">Enviar mensaje</button>
            </form>

            {enviado && (
                <p role="status">
                    ¡Gracias! El formulario se ha validado correctamente.
                </p>
            )}
        </section>
    );
}

export default FormularioContacto;