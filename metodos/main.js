
const pets = [
    {
        specie: "Gato",
        name: "Juno",
        age: 5
    },
    {
        specie: "Gato",
        name: "Canela",
        age: 1
    },
    {
        specie: "Perro",
        name: "Jupiter",
        age: 6
    },
    {
        specie: "Perro",
        name: "Ramon",
        age: 8
    },
    {
        specie: "Ajolote",
        name: "Nemo",
        age: 1
    },
    {
        specie: "Hamster",
        name: "Benito",
        age: 2
    },
    {
        specie: "Gato",
        name: "Aurora",
        age: 3
    }
]

const numbersArray = [ 10.5, 5.33, 3.4, 50.2, 33.888, 20, 101.83, 666.666 ]


//map
/* 
    arreglo.map( ( elementoActual, indiceActual, array ) => {
        //instrucciones a ejecutar con cada elemento
        return valorDeRetorno
    })
*/
//crea un nuevo array con los valores de retorno del callback que recibe como parametro y que se aplica a cada uno de sus elementos

//Generar un nuevo arreglo con los numeros redondeados.
const retornoMap = numbersArray.map( number => Math.round( number ))
console.log( retornoMap )
/*
    (number) => Math.round( number )

    ( 10.5 ) => Math.round( 10.5 )  -> [ 11 ]
    ( 5.33 ) => Math.round( 5.33 ) -> [ 11, 5 ]

*/


//Generar un arreglo con el cuadrado de todos los numeros ya redondeados
const numbersSquare = retornoMap.map( number => number ** 2 )
console.log( numbersSquare )

//Generar una funcion que devuelva un arreglo con la informacion requerida de todas las mascotas. La informacion a generar se recibe como parametro de la funcion

//const obtenerData = (dato, arreglo) => arreglo.map( elemento => elemento[dato] )
function obtenerData(dato, arreglo) {
    return arreglo.map( item => item[dato] )
} 

console.log( obtenerData("specie", pets)  )

//filter
//Filtrar a las mascotas por especie.
/*
    arreglo.fiilter( (elementoActual, indice, array) => condicion )
*/

//Filtrar numeros que sean mayores a 15

const numerosMayores15 = numbersArray.filter( number => number > 15 )
console.log( numerosMayores15 )

/*
function filtrado( array ){
    let arregloFiltrado = []
    for (let index = 0; index < array.length; index++) {
        if( array[index] > 15  ){
            arregloFiltrado.push( array[index] )
        }
    }

    return arregloFiltrado
}
*/

//Generar una funcion que reciba como parametro un numero entero. Este numero se utilizara para filtrar a las mascotas. Aquellas que tengan una edad igual o mayor al parametro recibido se devolveran en un arreglo. En caso de que ninguna mascota entre en ese filtro, devolver una cadena que diga: "No se encontraron coincidencias"

const filtroEdad = ( edad, arregloMascotas ) => {
    const resultadoFiltrado = arregloMascotas.filter( mascota => mascota.age >= edad  )
    //Si no hay coincidencias, filter devuelve un arreglo vacio -> []

    if( resultadoFiltrado.length !== 0 ){
        return resultadoFiltrado
    }else{
        return "No se encontraron coincidencias"
    }
}

console.log( filtroEdad( 10, pets ) )

//Funcion que busque las mascotas a partir de su especie

const filtroEspecie = ( especie, arregloMascotas ) => {
    const resultadoFiltrado = arregloMascotas.filter( mascota => mascota.specie === especie )

    if( resultadoFiltrado.length !== 0 ){
        return resultadoFiltrado
    }else{
        return "No tenemos de esos animalitos"
    }
}

console.log( filtroEspecie( "Jirafa", pets ) )


//find
//Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
/*
    arreglo.find( (elementoActual, indice, array) => condicion )

*/
//Encontrar el primer numero que sea menor mayor a 15
/*
function filtrado( array ){
    for (let index = 0; index < array.length; index++) {
        if( array[index] > 15  ){
            return  array[index]
        }
    }
}
*/

const resultadoFind = numbersArray.find( number => number >= 15 )
console.log( resultadoFind )


//Una funcion que devuelve a una mascota en especifico. La busqueda se llevara a cabo con el nombre.  

const buscarMascota = ( nombre, arregloMascotas ) =>{
    const resultadoFind = arregloMascotas.find( mascota => mascota.name === nombre )

    if( resultadoFind !== undefined ){
        return resultadoFind
    }else{
        return `No tenemos ninguna mascota con el nombre de '${nombre}' en nuestros registros`
    }
}

console.log( buscarMascota( "Firulais", pets ) )

//CRUD
//Create -> createElement()
//Read -> querySelector(), getElementById(), getElementsByTagName()
//Update -> textContent()
//Delete