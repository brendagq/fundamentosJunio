// PROMESAS

// Que representa lla eventuall finalizacion o falla de una operacion.
// No conocemos su valor hasta que la tarea es completada
// Certeza de que van a generar un resultado eventualmente


// ===ESTADOS===
// PENDING (PENDIENTE) -> estado inicial
// FULFILLED (CUMPLIDA) -> La tarea se llevo a cabo con exito, fue completada
// REJECTED (RECHAZADA) -> La operacion falla

//new genera una nueva instancia 
/*
const unaPromesa = new Promise( (resolve, reject) =>{
    //tarea que involucra a la promesa
    if( siLaTareaSeCumple){
        resolve( "Valor que la promesa va a devolver" )
    }else{
        reject( "El error que la promesa va a devolver como razon del fallo" )
    }
})
*/


const evaluarEdad = ( edad ) => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() => {     
            if( edad >= 18 ){
                resolve( "Puede entrar a la plataforma" )
            }else{
                reject( "Ups, parece que eres menor de edad" )
            }
        }, 3000);
    })
}

const evaluarEdadSinPromesa = ( edad ) =>{
    setTimeout( () => {
        if( edad >= 18 ){
            return "Puede entrar a la plataforma"
        }else{
            return "Ups, parece que eres menor de edad"
        }
    }, 3000 )
}

//CONSUMIR PROMESAS
// then( (loQueResolveMandó) => //INSTRUCCIONES  ) / catch( (loQueRejectMando) => //INSTRUCCIONES )
/*
promise()
.then( response => console.log( response ) )
.catch( error => console.error( error ) )
*/

evaluarEdad( 15 )
.then( response => console.log( response ) )
.catch( error => console.error( error ) )

//console.log( evaluarEdadSinPromesa( 30 ) ) //undefined

