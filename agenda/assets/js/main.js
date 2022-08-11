
const users = [
    {
        name: "Fulanita Perez",
        email: "fulanita@gmail.com",
        age: 30,
        image: "https://picsum.photos/id/1011/200/300",
        genre: "Mujer",
        vaccinated: true

    },
    {
        name: "Matias Sanchez",
        email: "matias@gmail.com",
        age: 20,
        image: "https://picsum.photos/id/1005/200/300",
        genre: "Hombre",
        vaccinated: false
    },
    {
        name: "Susana Distancia",
        email: "susy@gmail.com",
        age: 52,
        image: "https://picsum.photos/id/1027/200/300",
        genre: "Mujer",
        vaccinated: false
    },
    {
        name: "Maria Antonieta Doe",
        email: "maria@gmail.com",
        age: 15,
        image: "https://picsum.photos/id/342/200/300",
        genre: "Mujer",
        vaccinated: true
    },
    {
        name: "Korra",
        email: "korra@gmail.com",
        age: 16,
        image: "https://elcomercio.pe/resizer/ZFLIcf4cPuTlkY5biZEGPg7e-nM=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/B7NLPCPW7BANBEEJOMMRTYTHIY.jpg",
        genre: "Mujer",
        vaccinated: false
    },
    {
        name: "Angelica Pickles",
        email: "angelica@gmail.com",
        age: 3,
        image: "https://static.wikia.nocookie.net/doblaje/images/1/19/Angelica_Pickles.png/revision/latest?cb=20130225180210&path-prefix=es",
        genre: "Mujer",
        vaccinated: false
    },
    {
        name: "Calamardo Tentaculos",
        email: "angelica@gmail.com",
        age: 26,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-WKCVQkTItzvnuxE-qV7j2TK6EDGtm9Kwg&usqp=CAU",
        genre: "Hombre",
        vaccinated: false
    },
    {
        name: "Principe Zuko",
        email: "zuko@gmail.com",
        age: 16,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDdKUcZtxxzG3vh0cuYY5dHSnumrBGpY7Dw&usqp=CAU",
        genre: "Hombre",
        vaccinated: true
    }
]

//EVENT LISTENERS
// addEventListener
/*  
    elemento.addEventListener( "evento", (event) => {
        //Que se va a llevar a cabo cuando se detecte el "evento" sobre el elemento
    })
*/
/*
const boton = document.querySelector( ".btn-delete" )
const imagen = document.querySelector("img")
*/
// elemento.remove()
/*
boton.addEventListener( "click", evento =>{
    console.log( evento )
    imagen.remove()
})
*/
/*
boton.addEventListener( "click", e => {
    const contenedor = e.target.parentElement
    contenedor.remove()
})
*/

// padre.removeChild( "hijoQueQuieroEliminar" )
/*
const lista = document.querySelector( "ul" )
const boton = document.querySelector( "button" )

boton.addEventListener( "click", e => {
    lista.removeChild( lista.lastElementChild )
})
*/
/*
const section = document.createElement( "section" )
const body = document.querySelector("body")

body.appendChild( section )


section.innerHTML = `<h2 class="text-red"> TITULO </h2>`
*/
//reflow 

const container = document.querySelector(".contact-container")
const formName = document.querySelector("form#search-name")
const reset = document.querySelector("#reset")

window.addEventListener( "DOMContentLoaded", e =>{
    showUsers(users)
})

function showUsers( usersArray ) {
    let fragmentHTML = ``
    
    if( usersArray.length !== 0 ){
        usersArray.map( user => {
            fragmentHTML += `<div class="contact-card">
                <img src=${user.image} class="contact-card--image" alt="Imagen del contacto">
                <p><span class="contact-card--data">Nombre:</span>${user.name}</p>
                <p><span class="contact-card--data">Email:</span>${user.email}</p>
                <p><span class="contact-card--data">Edad:</span>${user.age}</p>
                <p><span class="contact-card--data">Genero:</span>${user.genre}</p>
                <p class="contact-card--vaccination ${ user.vaccinated ? "vaccination__completed" : "" }">Vacunacion</p>
            </div>`  
        })
        
        container.innerHTML = fragmentHTML
    }else{
        container.innerHTML = `<h2> No hubo coincidencias <h2/>`
    }

    //empty state

}

formName.addEventListener( "submit", e => {
    const input = formName.querySelector("input")
    searchByName( input.value )

    e.preventDefault()
})

function searchByName( nombre ){
    let user = users.filter( user => user.name === nombre )

    showUsers( user ) 
}

reset.addEventListener( "click", () => showUsers(users) )


//Busqueda por genero

//Agregar un boton de eliminar a cada usuario.
//Cuando se haga click en el boton, el usuario debe de eliminarse (Del DOM, en el arreglo de usuarios )