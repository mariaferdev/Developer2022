/*Manipular el DOM: 
¿Cómo se lanzan y capturan eventos */

/*Escuchar eventos del DOM (content loaded) */
document.addEventListener('DOMContentLoaded',
function(){
    console.log('DOM cargado');
});

/*Iniciar event listener sobre elemento HTML a*/
var enlace = document.querySelector('a');
enlace.addEventListener('click',
function(event){
    console.log('clicked');
    event.preventDefault();
});