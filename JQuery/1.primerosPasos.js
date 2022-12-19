/*Cambiar el contenido de un h1 con javascript nativo */

/*var elemento = document.querySelector('h1');
console.log(elemento.innerHTML);
var timeout = setTimeout(function () {
    elemento.innerHTML = 'Hola desde DOPodcast!';
}, 1000)*/

var elemento = jQuery('h1');
console.log(elemento.innerHTML);
var timeout = setTimeout(function () {
    elemento.text('Hola desde DOPodcast con jQuery!');
}, 1000);

/*TENGO ERRORES CON NULL Y undefined Y CONFUSIÓN CON el lugar dónde script por proyectos anteriores si en el head o en el body */