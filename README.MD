# Librería utileria.js

**Nombre:** Garcia Cisneros Jonathan Julian  
**Problema que resuelve:** Proporciona un conjunto de funciones ligeras en JavaScript Vanilla para realizar validaciones de formularios (correo, contraseña, solo letras, longitud), cálculos de fechas/edad y formateo de datos sin depender de librerías externas.

---

## Instalación

Incluye el archivo script en tu proyecto HTML antes del cierre de la etiqueta `</body>`:

```html
<script src="js/utileria.js"></script>
```

---

## Uso con ejemplos de código

### 1. Validar Correo Electrónico
```javascript
if (validarCorreo("usuario@gmail.com")) {
    console.log("Correo válido");
}
```

### 2. Validar Solo Letras
```javascript
console.log(soloLetras("Juan Perez")); // true
console.log(soloLetras("Juan123"));    // false
```

### 3. Validar Longitud
```javascript
console.log(validarLongitud("9511234567", 10)); // true
```

### 4. Calcular Edad y Mayoría de Edad
```javascript
let edad = calcularEdad("2000-05-15");
let esMayor = esMayorDeEdad("2000-05-15");
console.log("Edad: " + edad + ", Mayoría: " + esMayor);
```

### 5. Validar Contraseña Segura
```javascript
console.log(validarPassword("Clave123!")); // true
```

### 6. Funciones Propias
```javascript
console.log(convertirMayusculas("hola mundo")); // "HOLA MUNDO"
console.log(esNumeroPar(4));                    // true
```

---

## Capturas de pantalla

*(Inserta aquí imágenes ejecutando las funciones en la consola de tu navegador)*

---

## Video Promocional (1 Minuto)

[Enlace al video de demostración aquí]