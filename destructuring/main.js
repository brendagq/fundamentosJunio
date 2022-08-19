
import { calcularVolumenRectangulo, calcularVolumenEsfera } from './module/calcularVolumen.js'

/* 
    DESTRUCTURING 

    Asignar en variables individuales la informacion que esta almacenada en arreglos y objetos

*/

const nombres = [ "Jesus", "Juan Manuel", "Sara", "Julio", "Michael", "Luis" ]
/*
let uno = nombres[0]
let dos = nombres[1]
console.log( uno, dos )
*/

const [ uno, dos, , cuatro, ...elResto ] = nombres

/* REST OPERATOR
    ...rest
*/
//console.log( uno, dos, cuatro , elResto)


const gato = {
    nombre: "Juno",
    especie: "Gato",
    raza: "Sí",
    color: "Calico",
    vacunada: true,
    edad: 5,
    ronronear: function( ) {
        console.log( "Prrrrrrrrrrrrrr" )
    }
}

let { edad, color, ronronear, ...restoGato } = gato

//console.log( edad, color, ronronear )
//ronronear()
//console.log( restoGato )


const user = {
    name : "Hector",
    age: 32,
    country: "Venezuela",
    favoriteBand: "Metallica"
}

function saludarUsuario( { name, age } ){
    console.log( `Hola, me llamo ${name} y tengo ${age} años.` )
}

//saludarUsuario( user )


// Generar una funcion que sea capaz de recibir muchos numeros y sumarlos


    function sumarNumeros( ...restNumeros ){
        return restNumeros.reduce( (suma, numActual) => suma + numActual )
    }

   // console.log( sumarNumeros( 2, 5, 4, 10, 6, 9, 10, 12, 30, 20, 5, 100, 200 ) )


// SPREAD OPERATOR
// Esparce la informacion de un dato iterable ( strings, arrays, objetos )
// ...datoIterable


//console.log( ...nombres ) // "Sara"
//console.log( ..."cadena" ) // "c" "a"
//console.log( { ...gato } )

/*
let objeto1 = {
    a: 1,
    b: 2
}

let objeto2 = { ...objeto1 }

let objeto3 = {
    a: 1,
    b: 2
}

objeto1.a = 100

console.log( objeto1 == objeto2 )
console.log( objeto1, objeto2 )
*/


const rectangulo = {
    base: 10,
    largo: 15,
    altura: 5
}

const medidas = Object.values( rectangulo )
//console.log( Object.entries( rectangulo ) )
console.log( medidas )


console.log( calcularVolumenRectangulo( ...medidas )) // medidas[0], medidas[1], medidas[2]

