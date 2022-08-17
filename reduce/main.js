
/* 
    REDUCE 
    Método de orden superior, (recibe un callback)
    Ejecutar una funcion reductora sobre cada elemento que haya en el arreglo y va a generar un unico valor

    arreglo.reduce( ( acumulador, valorActual, indice, arreglo ) => {
        //instrucciones que van a servir para reducir al elemento
        return "lo que queremos añadir al acumulador"
    }, valorInicial )

*/


const arregloNumeros = [ 1, 5, 10, 15 ]

const retornoReduce = arregloNumeros.reduce( (acumulador, numActual, indice, arreglo) => acumulador + numActual , "" )

console.log( retornoReduce )
//console.log( "" - 1 ) // -1 

/*
    acumulador   valorActual    acumulador + valorActual
1  ""               1            0 + 1 -> 1
2   1               5            1 + 5 -> 6 
3   5               10           6 + 10 -> 16
4   16              15           16 + 15 -> 31
*/


const matriz = [[0, 1], [2, 3], [4, 5] ] // --> [ 0, 1, 2, 3, 4, 5 ]
//a.concat(b) === [ ...a, ...b ]


const matrizResultado = matriz.reduce( ( acc, item ) => acc.concat(item) )

console.log( matrizResultado )


const cart = [
    {
        selected:3,
        id: 1,
        name: 'Hoodies',
        price: 14.00,
        image: 'assets/images/featured1.png',
        category: 'hoodies',
        quantity: 10
    },
    {
        selected:2,
        id: 2,
        name: 'Hoodies',
        price: 10.00,
        image: 'assets/images/featured1.png',
        category: 'hoodies',
        quantity: 10
    }
]

const total = cart.reduce( (total, product) => { 
    return total + ( product.price * product.selected )
}, 0)

console.log( total )


