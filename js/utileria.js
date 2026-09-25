/**
 * Valida si un texto tiene formato de correo electrónico.
 * @param {string} correo - Correo a validar.
 * @returns {boolean} - true si el formato es correcto, false si no.
 */
function validarCorreo(correo) {
    let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(correo);
}

/**
 * Valida que un texto contenga solo letras (mayúsculas, minúsculas, espacios y acentos).
 * @param {string} texto - Texto a validar.
 * @returns {boolean} - true si contiene solo letras, false si no.
 */
function soloLetras(texto) {
    let patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return patron.test(texto);
}

/**
 * Valida que la longitud de un número no excede el máximo permitido.
 * @param {number|string} numero - Número a evaluar.
 * @param {number} maxLongitud - Longitud máxima permitida.
 * @returns {boolean} - true si no supera el límite, false si no.
 */
function validarLongitud(numero, maxLongitud) {
    return String(numero).length <= maxLongitud;
}

/**
 * Calcula la edad en años a partir de la fecha de nacimiento.
 * @param {string} fechaNacimiento - Fecha en formato YYYY-MM-DD.
 * @returns {number} - Edad entera calculada.
 */
function calcularEdad(fechaNacimiento) {
    let hoy = new Date();
    let nac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nac.getFullYear();
    let mes = hoy.getMonth() - nac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nac.getDate())) {
        edad--;
    }
    return isNaN(edad) ? 0 : edad;
}

/**
 * Determina si la persona es mayor de edad (18 años o más).
 * @param {string} fechaNacimiento - Fecha en formato YYYY-MM-DD.
 * @returns {boolean} - true si es mayor de edad, false si no.
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

/**
 * Valida contraseña: mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial.
 * @param {string} password - Contraseña a evaluar.
 * @returns {boolean} - true si cumple con los requerimientos, false si no.
 */
function validarPassword(password) {
    let tieneMayus = /[A-Z]/.test(password);
    let tieneMinus = /[a-z]/.test(password);
    let tieneNum = /\d/.test(password);
    let tieneEspecial = /[@$!%*?&.#_-]/.test(password);
    let minLongitud = String(password).length >= 8;

    return tieneMayus && tieneMinus && tieneNum && tieneEspecial && minLongitud;
}

// --- SECCIÓN LIBRE (2 FUNCIONES ADICIONALES) ---

/**
 * Convierte un texto completo a letras mayúsculas.
 * @param {string} texto - Texto a transformar.
 * @returns {string} - Texto en mayúsculas.
 */
function convertirMayusculas(texto) {
    return String(texto).toUpperCase();
}

/**
 * Determina si un número dado es par.
 * @param {number} numero - Número a evaluar.
 * @returns {boolean} - true si es par, false si es impar.
 */
function esNumeroPar(numero) {
    return Number(numero) % 2 === 0;
}