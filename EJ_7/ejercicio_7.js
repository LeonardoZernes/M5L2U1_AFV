let array = [];

// Función para añadir un número entero al Array
function addNum() {
    // Cogemos el valor del input del formulario para sumar al array que tengamos
    const numero = +document.getElementById("numero").value;

    if (Number.isInteger(numero)){
        // Si el número es entero, sumamos. Doble validación.
        array.push(numero);

        // Añadimos para que muestre el mensaje de que todo fue bien. Si ya hay uno, lo reescribe
        let texto = "El número es entero. El array actual es " + recorrerArray(array) + ".";
        putTextArray(texto);
        
    }
    else {
        // Si el número no es entero, levanta alerta.
        alert("El número introducido no es entero. Por favor, introduzca un número válido.");
    }
}

// Definimos una función para actualizar el texto indicativo en la parte inferior del input
function putTextArray(texto) {
    // Hace la llamada de si existe el elemento a través del DOM
    let textoNum = document.getElementById("text-number");
        if (textoNum){
            // Si existe, simplemente actualizamos el contenido del texto por el deseado
            textoNum.textContent = texto;
        }
        else {
            // Si no existe en el DOM, lo creamos para que se muestre, con su clase CSS y su id
            textoNum = document.createElement("p");
            textoNum.setAttribute("class", "texto-log");
            textoNum.setAttribute("id", "text-number");
            textoNum.textContent = texto;
            document.getElementById("addNumero").after(textoNum);
        }
}

// Definimos una función para recorrer el array y nos lo devuelva con un formato específico como string
function recorrerArray(array) {
    // Inicializamos el string a mostrar
    let resultado = '[';
    
    // Si sólo tenemos 1 número cerramos el corchete
    if (array.length == 1){
        return resultado + array + ']';
    }
    else {
        // Para 2 números o más en el array, recorremos con un for
        for (cifra of array) {
            resultado += cifra;

            // Hay que tener en cuenta que la última cifra no llevará la coma de separación
            if (array[array.length - 1]!=cifra){
                resultado += ', ';
            }
        }
        return resultado + ']';
    }
}

// Función para un botón de reset del array
function clearArray() {
    // Inicializamos el array para vacirlo
    array = [];
    putTextArray("Se ha reseteado el Array. El valor actual está vacío.");
    sumaEnterosPares(array);
}

// Función para sumar los valores enteros pares de un array
function sumaEnterosPares(arrayNum) {
    let suma = +0;
    console.log(arrayNum);
    //Realizamos un bluce para recorrer el Array
    for (num of arrayNum) {
        // Comprobamos el resto si es cero para comprobar si es par
        if (num % 2 == 0) {
            suma += +num;
            console.log(suma);
        }
    }

    //Recogemos el párrafo con el resultado y lo actualizamos con el DOM
    let textoSuma = document.getElementById("resultado");
    textoSuma.textContent = suma;
}