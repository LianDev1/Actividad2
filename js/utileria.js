    /**
     * Librería utileria.js
     */

    /**
     * @param {string} correo
     * @returns {boolean}
     */
    function validarCorreo(correo) {
        let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return patron.test(correo);
    }

    /**
     * @param {string} texto
     * @returns {boolean}
     */
    function soloLetras(texto) {
        let patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        return patron.test(texto);
    }

    /**
     * @param {number|string} numero
     * @param {number} maxLongitud
     * @returns {boolean}
     */
    function validarLongitud(numero, maxLongitud) {
        return String(numero).length <= maxLongitud;
    }

    /**
     * @param {string} fechaNacimiento
     * @returns {number}
     */
    function calcularEdad(fechaNacimiento) {
        let hoy = new Date();
        let nac = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - nac.getFullYear();
        let mes = hoy.getMonth() - nac.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < nac.getDate())) {
            edad--;
        }
        return edad;
    }

    /**
     * @param {string} fechaNacimiento
     * @returns {boolean}
     */
    function esMayorDeEdad(fechaNacimiento) {
        return calcularEdad(fechaNacimiento) >= 18;
    }

    /**
     * @param {string} password
     * @returns {boolean}
     */
    function validarPassword(password) {
        let patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;
        return patron.test(password);
    }

    /**
     * @param {string} texto
     * @returns {string}
     */
    function convertirMayusculas(texto) {
        return texto.toUpperCase();
    }

    /**
     * @param {number} numero
     * @returns {boolean}
     */
    function esNumeroPar(numero) {
        return numero % 2 === 0;
    }