/* Ejercicio 18: Eventos
- Cuando hagamos click sobre el botón de guardar aparecerá un alert.
- Cuando hagamos foco sobre el input del nombre el fondo será de un color y cuando 
  se lo quitemos, de otro.
- Dependiendo de si escribimos una vocal o una consonante en el segundo input su
  contenido se mostrará de un color distinto. 
*/

// Definimos una función genérica que nos permitirá cambiar de color tanto al hacer focus como al salir
function cambioFondo(id, color) {
    document.getElementById(id).style.backgroundColor = color;
}

// Definimos la función para valorar si es una consonante o una vocal
function valoracionLetra() {
    let input = document.getElementById("letras");

    // Definimos una expresión regular que sólo incluya vocales
    const regularExp = new RegExp(/[aeiou]/g, '');

    // Comprobamos que nuestro contenido tiene vocales
    if (regularExp.test(input.value)){
        // si tiene vocales -> fondo rojo
        input.style.backgroundColor = 'red';
    } else {
        // si tiene consonantes -> fondo amarillo
        input.style.backgroundColor = 'yellow';
    }
}
