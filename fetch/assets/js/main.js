
/* PROTOCOLO HTTP  */
/* Hypertext Transfer Protocol / Protocolo de transferencia de hipertexto   */


/*
METODOS HTTP
    GET
    POST / PUT
    PATCH
    DELETE
*/

/* RECURSO 
A donde nos intentamos comunicar
*/

/*
    CODIGO DE RESPUESTA HTTP
    Nos indican que ocurrio con nuestra peticion y en caso de error nos indican que lo generó
*/

/* FETCH -> API nativa de JS para generar comunicacion con servidores */

/*  
    fetch( 'url' )
    .then( respuesta => respuesta.json() )
    .then( respFormateada => instrucciones que ocupan respFormateada )

*/

/* 
    API -> Application Programming Interface / Interfaz de programacion de aplicaciones
    Permiten comunicacion entre dos aplicaciones
    Pueden tener varias funciones    
*/


const URLBase = "https://pokeapi.co/api/v2/"
const form = document.querySelector("form")


document.addEventListener( "DOMContentLoaded", () => {
    fetchData("pikachu")
})

form.addEventListener( "submit", e => {
    let input = form.querySelector("input")
    let nombre = input.value.toLowerCase()
    
    fetchData( nombre )

    e.preventDefault()
})

function fetchData( nombrePokemon ) {

  fetch( `${URLBase}pokemon/${nombrePokemon}` )
  .then( response => response.json() ) //recibe la respuesta satisfactoria del servidor y la convierte a un formato adecuado
  .then( dataPokemon => {
    console.log( dataPokemon)
    mostrarPokemon( dataPokemon )
    }) //recibir lo que generó el then de arriba, y ocupar la informacion ya formateada de la forma que mas convenga
  .catch( error => { 
    console.error( error ) 
    mostrarToast()
   }) //Manejamos casos de error
}


function mostrarPokemon( data ){
    const contenedorPokemon = document.querySelector( ".contenedor-pokemon" )

    contenedorPokemon.innerHTML = `
        <img src=${data.sprites.other.dream_world.front_default}>
        <h2> ${data.name} </h2>
    `
}

function mostrarToast(){
    const toast = document.querySelector(".toast")
    toast.classList.add( "mostrar" )
    setTimeout(() => {
        toast.classList.remove("mostrar")
    }, 3500);

}

//Modificar el codigo necesario para generar una busqueda dinamica de pokemones
//Nombre del pokemon en la url del fetch SIEMPRE debe de ir en minusculas
//Pikachu se va a mostrar por default al recargar la pagina