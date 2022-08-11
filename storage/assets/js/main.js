
// window -> representa al navegador

// localStorage
//Los datos no tienen fecha de expiracion

// sessionStorage
//L informacion solo se guarda mientras la sesion siga activa. En cuanto se cierra la ventana del navegador, la informacion se pierde 

//JSON -> Formato de texto para el intercambio de datos
//JavaScript Object Notation

//JSON.stringify( dato ) -> datos en formato JSON
let JSONString = JSON.stringify( "Hola mundo!" )
console.log( JSONString )

let JSONNumber = JSON.stringify( 100 )
console.log( JSONNumber )

let JSONArray = JSON.stringify( [1, 2, 3] )
console.log( JSONArray )

let JSONObject = JSON.stringify(  { name: "Brenda", age: 27 } )
console.log( JSONObject )

//JSON.parse( JSON ) -> datos en su formato original
console.log( JSON.parse( JSONString ) )
//console.log( JSON.parse( "Texto" ) )

console.log( JSON.parse( JSONNumber ) )
console.log( JSON.parse( JSONArray ) )
console.log( JSON.parse( JSONObject ) )




//METODOS PARA EL STORAGE

// window.localStorage.setItem( "nombre", valorAGuardar )

const groupObj = {
    gen: 17,
    group: 1
}

//window.sessionStorage.setItem( 'grupoInfo', JSON.stringify( groupObj ) )

//Generar un objeto con su informacion, nombre, edad y correo, y alamacenarlo 


//alert
//prompt

//const infoDadaUsuario = prompt( "Escribe tu color favorito" )
//console.log( infoDadaUsuario )

//Modificar Informacion
//window.localStorage.setItem( "variableAModificar", nuevaInfo )

//window.sessionStorage.setItem( "pelicula", JSON.stringify( "Sherk" ) )

//window.sessionStorage.setItem( "pelicula", JSON.stringify( "Spider-man" ) )

//Con un prompt van a preguntar cual es el animal favorito, actualizaran el objeto con su informacion y tambien van a actualizar la info en el Storage
/*
const animalFav = prompt("¿Cual es tu animal fav?")
groupObj.animalFav = animalFav

window.localStorage.setItem( 'grupoInfo', JSON.stringify( groupObj ) )
*/
//CONSULTAR INFOMACION
// window.localStorage.getItem( "datoAConsultar" )

//let peliculaFav = JSON.parse( window.sessionStorage.getItem( "pelicula" ) )
//console.log( peliculaFav )


//Mostrar en un alert el siguiente texto: "Soy -tu nombre- y mi animal favortito es -tu animal fav-"

//let informacionConsultada = JSON.parse( window.localStorage.getItem('grupoInfo') )

//alert( `Soy ${informacionConsultada.name} y mi animal favorito es el ${informacionConsultada.animalFav}` )
//ELIMINAR 
// window.localStorage.removeItem( "nombreDatoAEliminar" )
//window.localStorage.removeItem( "pelicula" )

// window.localStorage.clear() 
//window.localStorage.clear()