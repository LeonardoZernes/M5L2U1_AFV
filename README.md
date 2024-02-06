## Ejercicios del Módulo 5. Lección 2. Unidad 1: JS

En estos ejercicios del Máster GIS Online, impartido por Esri España, veremos el funcionamiento de las principales herramientas de la funcionalidad del lenguaje Java Script, así como su integración con los elementos HTML y su potencial de desarrollo web.

### Ejercicio 7: Sumar los valores pares de un Array de números enteros con JS

- Función en JS para Añadir números a un Array desde cero creado por el usuario
- Función en JS para sumar los valores pares de un Array de números enteros
- Función en JS para resetear el array creado por el usuario, así como los detalles visuales
- Se añaden detalles del front-end como:
    - Campos de input para solicitar valores al usuario.
    - Visualización de resultados mientras se ejecuta la herramienta.
    - Estilos de encabezado y tipografías
    - Pie de página con créditos del desarrollador

![image](https://github.com/LeonardoZernes/M5L2U1_AFV/assets/60662663/dfd626cf-af49-4e92-8174-3421443d8917)

*Figura 1: Visualización de la interfaz web para solicitar datos al usuario. Se añaden valores al Array con el botón "Añadir número".*

![image](https://github.com/LeonardoZernes/M5L2U1_AFV/assets/60662663/95aa3ca7-2a1b-4f86-b8be-3cb52e915cc5)

*Figura 2: Siempre que los valores numéricos sean enteros, se añadirán como último número en el Array.*

![image](https://github.com/LeonardoZernes/M5L2U1_AFV/assets/60662663/90b33876-795f-4448-9889-88299f652331)

*Figura 3: Si por el contrario el valor introducido no es entero, se devolverá un mensaje de alerta avisando al usuario.*

![image](https://github.com/LeonardoZernes/M5L2U1_AFV/assets/60662663/dfa0b909-fa32-4226-a6d5-8785e36c0197)

*Figura 4: Al aplicar al botón "Suma enteros pares" calculará la suma de los valores pares del Array de enteros, mostrando el resultado en el Front-End.*

![image](https://github.com/LeonardoZernes/M5L2U1_AFV/assets/60662663/de197e65-2cac-46c2-ae6e-9fc1ec1f0ef6)

*Figura 5: Finalmente el botón de "Limpiar el Array" restaura toda la interfaz desde el inicio y muestra mensaje en el Front-End.*

### Ejercicio 15: Usuarios Premium

Se solicita: Utilizando el array users definido en el enunciado, pinta en la consola una frase por cada usuario que es premium y después crea un array con los usuarios que no son premium.

- Se añade interfaz para crear usuarios definidos por el propio Usuario.
- Se establecen dos modalidades: Plan Premium y Plan Gratuito.
- Se crea una función en JS para crear usuarios.
- Se crea una función en JS para mostrar TODOS los usuarios.
- Se crea una función en JS para mostrar SÓLO los usuarios NO PREMIUM (array), y por consola, los premium.
- Se mandan alertas si no hay usuarios creados.

![image](https://github.com/LeonardoZernes/M5L2U1_AFV/assets/60662663/597e6f30-0813-4016-bc02-5ed95357df82)

*Figura 6: Vista previa de la interfaz de creación y muestra de usuarios.*

![image](https://github.com/LeonardoZernes/M5L2U1_AFV/assets/60662663/f332e34c-214f-4c65-87ec-e90616918fad)

*Figura 7: Añadimos información en el formulario y se crea un usuario satisfactoriamente. Tras la alerta, se limpia el formulario.*

![image](https://github.com/LeonardoZernes/M5L2U1_AFV/assets/60662663/f68a2911-e399-45db-87f7-b7687008cce1)

*Figura 8: El botón "Mostrar Usuarios" muestra la totalidad de los usuarios creados por el Front. Si no se crean usuarios previamente, no mostrará nada y lanzará una alerta. Para este ejemplo se introducen de forma manual los datos del enunciado.*

![image](https://github.com/LeonardoZernes/M5L2U1_AFV/assets/60662663/7403e460-9592-4184-b865-9d4bf060d3a2)

*Figura 9: El botón "Mostrar Usuarios (No Premium)" muestra sólo los usuarios del plan gratuito, y lanza por consola aquellos que son Premium.*

### Ejercicio 17: Manejo del DOM

Se solicita: Mostrar por el front al final de la página los resultados utilizando innerHTML y creando un nodo.

- Se incorpora botón de "Ver resultados".
- Se muestra el número de enlaces de la página.
- Se muestra la dirección a la que enlanza el penúltimo enlace del HTML.
- Se muestra el número de enlaces del tercer párrafo.
- Se comprueba que haya al menos 3 párrafos para hacer la función anterior, si no levanta alerta.

![image](https://github.com/LeonardoZernes/M5L2U1_AFV/assets/60662663/cd62e903-6575-4aef-a6aa-60bdd8bb185d)

*Figura 10: Estructura general del ejercicio con los contenidos exigidos por el enunciado.*

![image](https://github.com/LeonardoZernes/M5L2U1_AFV/assets/60662663/e4cf14e8-9ea3-40ff-984d-0c881c3b4af0)

*Figura 11: Se incorpora el botón de "Ver resultados" que ejecutará crear un nodo con la información necesaria y añadirlo al final del HTML. Podemos comprobar que hay un total de 6 enlaces, el penúltimo enlace es correcto y el tercer párrafo efectivamente tiene 2 enlaces.*
