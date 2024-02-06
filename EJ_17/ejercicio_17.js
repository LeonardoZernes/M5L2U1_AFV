/* Funciones relacionadas con el Ejercicio 17: Manejo del DOM
- Número de enlaces de la página.
- Dirección a la que enlanza el penúltimo enlace.
- Número de enlaces del tercer párrafo.
Además, pinta los resultados al final de la página utilizando innerHTML y creando un nodo */

function resultados() {
    // Preparamos el nodo HTML donde irán los resultados y lo reiniciamos si tuviera texto anterior
    let final = document.getElementById("resultados");
    final.innerHTML = '';

    // Creamos el nodo de resultados
    let resultados = document.createElement("p");

    // Definimos el número de enlaces
    let enlaces = document.getElementsByTagName("a");
    resultados.innerHTML = 'En total, en esta página hay ' + enlaces.length + ' enlaces.';

    // Creamos una etiqueta "a" de enlace para referenciar el penúltimo
    let link = document.createElement("a");
    link.href = enlaces[enlaces.length - 2].getAttribute("href");
    link.innerHTML = enlaces[enlaces.length - 2].getAttribute("href");

    // Lo añadimos como un hijo al nodo de resultados
    resultados.innerHTML += ' El penúltimo enlace lleva a ';
    resultados.appendChild(link);

    // Por último, vemos cuántos enlaces hay en el tercer párrafo
    let parrafos = document.getElementsByTagName("p");
    // Realizamos una pequeña comprobación para ver si hay al menos 3 párrafos, si no levanta alerta
    if (parrafos.length > 1 || parrafos.length >= 3) {
        resultados.innerHTML += ". El tercer párrafo tiene un total de " + parrafos[2].getElementsByTagName("a").length + " enlaces.";
    } else {
        alert("No se puede calcular el número de enlaces del tercer párrafo porque el número de párrafos en esta web es menor que 3.")
    }

    final.appendChild(resultados);
}