// Funciones de JS para el Ejercicio 15. Usuarios Premium
let usuarios = [];

// Definimos la función para crear un usuario
function crearUsuario() {
    // Llamamos a los datos de las variables
    const input_nombre = document.getElementById("nombreUsuario").value;
    const input_edad = document.getElementById("edad").value;
    const input_premium = document.getElementById("premium").value;
    
    // Creamos un objeto y le vinculamos los valores
    let usuario = new Object();
    usuario.nombre = input_nombre,
    usuario.edad = input_edad,
    usuario.premium = input_premium;
    
    // Añadimos al Array de usuarios totales
    usuarios.push(usuario);

    // Limpiamos el formulario del front
    document.getElementById("crearUsuario").reset();
    alert("Usuario creado con éxito")
}

/*Creamos una función que, con una lista de usuarios y un objeto del DOM
sea capaz de crear hijos de estilo párrafo con los datos de los todos los usuarios */
function datosUsuariosDOM(lista, contenedor) {
    // Comprobamos que la lista de usuarios suministrada no está vacía
    if (lista.length === 0){
        alert("No existe ningún registro de usuario ¡Ánimate y crea uno nuevo!");
    } else {
        for (user of lista) {
        //Preparamos el texto que saldrá por el front
        if (user.premium == "true") {
            modalidad = "Plan Premium"
        }
        else {
            modalidad = "Plan Gratuito"
        }
        texto = "Nombre: " + user.nombre + ". Edad: " + user.edad + ". Modalidad: " + modalidad;
        
        //Creamos el elemento párrafo y le ponemos el texto preparado con los datos
        listadoUsuarios = document.createElement("p");
        listadoUsuarios.textContent = texto;
        
        //Añadimos el elemento al indicador DOM suminsitrado como un hijo
        contenedor.appendChild(listadoUsuarios);
        }
    }
}

// Función para mostrar TODOS los usuarios en el Front
function mostrarUsuarios() {
    //Vaciamos el DIV de listado de usuarios
    contenedor = document.getElementById("listado_usuarios");
    contenedor.innerHTML = '';

    // Llamamos a la función de mostrar los datos en el front
    datosUsuariosDOM(usuarios, contenedor);
    
}

// Función para mostrar todos los usuarios NO PREMIUM y lanzar los premium por consola.
function mostrarUsuariosNoPremium() {
    //Vaciamos el DIV de listado de usuarios
    contenedor = document.getElementById("listado_usuarios");
    contenedor.innerHTML = ''

    let usuariosNoPremium = []

    for (user of usuarios) {
        if (user.premium == "true") {
            // Imprimimos por consola según pide el enunciado los usuarios premium
            console.log(user);
        }
        else {
            // Añadimos los usuarios no premium a un Array
            usuariosNoPremium.push(user);
        }
    }

    // Comprobamos que el array no esté vacío, es decir, no tenga usuarios con el plan gratis
    if (usuariosNoPremium.length === 0) {
        alert("No existe ningún registro de usuario gratuito ¡Ánimate y crea uno nuevo!");
    } else {
        // Llamamos a la función de mostrar los datos en el front
    datosUsuariosDOM(usuariosNoPremium, contenedor);
    }
    
}