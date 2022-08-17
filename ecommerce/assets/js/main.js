
import { darkTheme } from './components/darkTheme.js'
import { load } from './components/load.js'
import { items } from './data/db.js'

document.addEventListener( "DOMContentLoaded", () =>{
    load()
    showProducts( items )
    darkTheme()
})

/*=======  CARRITO =========== */
const cartOpen = document.getElementById( "cart-shop" )
const cartClose = document.getElementById( "close-cart" )
const cartContainer = document.getElementById( "cart-container" )

cartOpen.addEventListener( "click", () => {
    cartContainer.classList.remove( "hide" )
})

cartClose.addEventListener( "click", () => {
    cartContainer.classList.add( "hide" )
})



/* ========SCROLL========= */
const header = document.getElementById("header")

window.addEventListener( "scroll", () =>{
    if( window.scrollY >= 50 ){
        header.classList.add("scroll-header")
    }else{
        header.classList.remove("scroll-header")
    }
})

/* AÑADIR PRODUCTO */
const productContainer = document.querySelector( "#products-list" )

function showProducts( products ){
    let fragment = ``

    products.map( product => {
        fragment += `
        <div class="product-card" id="${product.id}">
            <img src=${product.image} alt="">
            <button class="btn-add">ADD</button>
        </div>
        ` 
    } )

    productContainer.innerHTML = fragment

    cartFunctionality()
}



/* AGREGAR AL CARRITO */

function cartFunctionality( ){
    const btns = document.querySelectorAll( ".btn-add" ) //NodeList
    console.log( btns )
    
    //Arreglo con todos los botones
    const cart = []
    
    btns.forEach( button =>{
        button.addEventListener( "click", e => {
            const id = parseInt(e.target.parentElement.id)
            const selectedProduct = items.find( item => item.id === id)
            cart.push( selectedProduct )
            console.log( cart )

            cartProducts( cart )
        })
    })
}



/* PRODUCTOS DEL CARRITO  */

function cartProducts( cart ){
    const cartContainer = document.getElementById( "cart" )
    let fragment = ``
    cart.forEach( (item, index) => {
        fragment += `
        <div id="${index}">
            <p>${item.name}</p>
            <button class="btn-delete-product">Eliminar</button>
        </div>  
        `
    } )

    cartContainer.innerHTML = fragment
}


function deleteProduct( index, cart ){
    cart.splice( index, 1 )

    cartProducts( cart )
}